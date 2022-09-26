const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = Schema(
    {
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        title: {
            type: String,
            required: [true, 'Please add a title']
        },
        description: {
            type: String
        },
        deadline: {
            type: Date
            // required: true
        },
        members: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        tasks: [{
            type: Schema.Types.ObjectId,
            ref: 'Task'
        }]

    },
    {
        timestamps: true
    }
)

// projectSchema.index({name: 1, title: 1}) //mongoose 

module.export = mongoose.model("Project", projectSchema);