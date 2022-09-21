const express = require('express')
const { mongoose } = require('mongoose')
const Task = mongoose.model("Task")
const router = express.Router()

const validateTaskInput = require('../../validation/task')
//get project's task

router.get('/projects/:projectId', async (req, res, next) => {
    try {
        const tasks = await Task.find({ projectId: req.params.projectId }).populate("tasks").sort({ priority: -1 })
        return res.json(tasks)
    }
    catch (_err) {
        const err = new Error("There is no task")
        err.statusCode = 404;
        err.errors = { message: "There is no task" }
        return next(err)
    }
})




//get single task
router.get('/:id', async (req, res) => {
    Task.findById(req.params.id)
        .then(task => res.json(task))
        .catch(err => res.status(404).json({ noprojectfound: "No task found with that ID" }))
})



//create a task

router.post('/:projectId/create', validateTaskInput, async (req, res, next) => {
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            creator: req.body.creator,
            deadline: req.body.deadline,
            priority: req.body.priority,
            completed: req.body.completed,
            comments: req.body.comments
        })
        let task = await newTask.save()
        return res.json(task)
    }
    catch (err) {
        next(err)
    }
})


//delete a task

router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        return res.json(task)
    }
    catch (err) {
        res.status(404).json({ noprojectfound: "No projct found with that ID" })
    }

})


//update a task

router.put('/:id', validateTaskInput, async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such project" })
    }

    const task = await Task.findOneAndUpdate({ _id: id }, {
        ...req.body
    }, { returnDocument: "after" })

    if (!task) {
        return res.status(400).json({ error: "No such project" })
    }

    res.status(200).json(task)
})


module.exports = router