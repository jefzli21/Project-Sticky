const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        project: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Project"
        },
        title: {
            type: String,
            require: [true, 'Please add a title']
        },
        body: {
            type: Text,
        },
        deadline: {
            type: Date,
            require: [true, 'Please add a deadline']
        },
        priority: {
            type: Integer,
            require: [true, 'Please select priority']
        },
    }, 
    {
        timestamps: true
    }   
)

module.export = mongoose.model("Task", taskSchema);