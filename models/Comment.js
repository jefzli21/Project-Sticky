const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        body: {
            type: Text,
        },
        userId: {
            type: String,
            required: true
        },
        taskId: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.export = mongoose.model("Comment", commentSchema);