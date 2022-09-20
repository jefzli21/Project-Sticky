const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        title: {
            type: String,
            required: [true, 'Please add a title']
        },
        description: {
            type: String
        },
        deadline: {
            type: Date,
            require: [true, 'Please add a deadline']
        },
        member: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    }, 
    {
        timestamps: true
    }
)

projectSchema.index({name: 1, title: 1}) //mongoose 

module.export = mongoose.model("Project", projectSchema);