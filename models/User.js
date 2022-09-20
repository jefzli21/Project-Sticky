const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  projects:[{
    type: Schema.Types.ObjectId,
    ref: "Project"
  }],
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: "Task"
  }],
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);