const express = require('express')
const { mongoose } = require('mongoose')
const Comment = mongoose.model("Comment")
const router = express.Router()

const validateCommentInput = require('../../validation/comment')
// get task's comments
router.get('/', async (req, res, next) => {
    try {
        const comments = await Comment.find().populate("creator").sort({ createdAt: -1 })
        return res.json(comments)
    }
    catch (_err) {
        const err = new Error("There is no task")
        err.statusCode = 404;
        err.erros = { message: "There is no task" }
        return next(err)
    }
})

// create a comment

router.post('/', validateCommentInput, async (req, res, next) => {
    try {
        const newComment = new Comment({
            body: req.body.body,
            creator: req.body.creator
        })
        let comment = await newComment.save()
        return res.json(comment)
    }
    catch (err) {
        next(err)
    }
})



// delete a comment

router.delete('/:id', async (req, res) => {
    try {
        const comment = await Comment.findByIdAndDelete(req.params.id);
        return res.json(task)
    }
    catch (err) {
        res.status(404).json({ noprojectfound: "No projct found with that ID" })
    }

})


// update a comment

router.put('/:id', validateCommentInput, async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such project" })
    }

    const comment = await Comment.findOneAndUpdate({ _id: id }, {
        ...req.body
    }, { returnDocument: "after" })

    if (!comment) {
        return res.status(400).json({ error: "No such project" })
    }

    res.status(200).json(comment)
})


module.exports = router

