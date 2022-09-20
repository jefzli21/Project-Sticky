const { models } = require('mongoose')
const Project = require('../models/Project')


//get all projects


//get a single project


//create a new project
const createProject = async(req, res) => {
    const {user, title, description, deadline, member} = req.body

    try{
        const project = await Project.create({ user, title, description, deadline, member })
        res.status(200).json(project)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}


//delete a project



//update a project


module.exports = {
    createProject
}