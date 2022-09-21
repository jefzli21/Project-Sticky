const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema(
    {
        title: {
            type: String,
            require: [true, 'Please add a title']
        },
        description: {
            type: String,
            require: true
        },
        creator: {
            type: Object,
            required: true
        },
        deadline: {
            type: Date,
            require: [true, 'Please add a deadline']
        },
        priority: {
            type: Number,
            require: [true, 'Please select priority']
        },
        completed: {
            type: Boolean,
            default: false
        },
        comments: {
            type: Object
        }
    },
    {
        timestamps: true
    }
)

module.export = mongoose.model("Task", taskSchema);