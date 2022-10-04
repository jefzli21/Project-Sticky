const express = require("express");
const { mongoose } = require("mongoose");
const Project = mongoose.model("Project");
const router = express.Router();
const validateProjectInput = require("../../validation/project");
const Task = mongoose.model("Task");

//get all projects
router.get("/users/:userId", async (req, res, next) => {
    try {
        // let projects = await Project.find({ creator: req.params.userId })
        let userId = new mongoose.Types.ObjectId(req.params.userId);
        let projects = await Project.aggregate()
            .match({ "creator": userId })
            .lookup(
                {
                    from: Task.collection.name,
                    localField: "_id",
                    foreignField: "project",
                    as: "tasks"
                }
            );
        projects = await Project.populate(projects, "creator");
        projects = projects.sort((a, b) => a.deadline >= b.deadline ? 1 : -1);
        return res.json(projects);
    } catch (_err) {
        const err = new Error(_err.message);
        err.statusCode = 404;
        return next(err);
    }
});

//get a single project
router.get('/:id', async (req, res) => {
    Project.findById(req.params.id).populate("creator")
        .then(project => res.json(project))
        .catch(err => res.status(404).json({ noprojectfound: "No projct found with that ID" }))
})


//create a new project
router.post("/", validateProjectInput, async (req, res, next) => {
    try {
        const newProject = new Project({
            creator: req.body.creator,
            title: req.body.title,
            description: req.body.description,
            deadline: req.body.deadline,
            members: req.body.members,
            tasks: req.body.tasks,
        });
        let project = await newProject.save();
        return res.json(project);
    } catch (err) {
        next(err);
    }
});

//delete a project
router.delete("/:id", async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        return res.json(project);
    } catch (err) {
        res.status(404).json({ noprojectfound: "No projct found with that ID" });
    }
});

//update a project
router.put("/:id", validateProjectInput, async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "Invalid Id" });
    }

    const project = await Project.findOneAndUpdate(
        { _id: id },
        {
            ...req.body,
        },
        { returnDocument: "after" }
    );

    if (!project) {
        return res.status(400).json({ error: "Failed to update, project does not exist" });
    }

    res.status(200).json(project);
});

module.exports = router;
