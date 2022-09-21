const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema(
    {
        body: {
            type: String,
        },
        creator: {
            type: Object,
            required: true
        }
    },
    {
        timestamps: true
    }
)

module.export = mongoose.model("Comment", commentSchema);