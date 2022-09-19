const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        task: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Task"
        },
        body: {
            type: Text,
        }
    },
    {
        timestamps: true
    }
)

module.export = mongoose.model("Comment", commentSchema);