const express = require('express')
const { mongoose } = require('mongoose')
const Project = mongoose.model("Project")
const router = express.Router()

const validateProjectInput = require('../../validation/project')
//get all projects
router.get('/users/:userId', async (req, res, next) => {
    try {
        const projects = await Project.find({ userId: req.params.userId }).populate().sort({ deadline: -1 });
        return res.json(projects)
    }
    catch (_err) {
        const err = new Error("There is no project")
        err.statusCode = 404;
        err.erros = { message: "There is no project" }
        return next(err)
    }
})


//get a single project
router.get('/:id', async (req, res) => {
    Project.findById(req.params.id)
        .then(project => res.json(project))
        .catch(err => res.status(404).json({ noprojectfound: "No projct found with that ID" }))
})


//create a new project
router.post('/', validateProjectInput, async (req, res, next) => {
    try {
        const newProject = new Project({
            creator: req.body.creator,
            title: req.body.title,
            description: req.body.description,
            deadline: req.body.deadline,
            members: req.body.members,
            tasks: req.body.tasks
        })
        let project = await newProject.save()
        return res.json(project)
    }
    catch (err) {
        next(err)
    }
})



//delete a project
router.delete('/:id', async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        return res.json(project)
    }
    catch (err) {
        res.status(404).json({ noprojectfound: "No projct found with that ID" })
    }

})


//update a project
router.patch('/:id', validateProjectInput, async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such project" })
    }

    const project = await Project.findOneAndUpdate({ _id: id }, {
        ...req.body
    }, { returnDocument: "after" })

    if (!project) {
        return res.status(400).json({ error: "No such project" })
    }

    res.status(200).json(project)
})


module.exports = router