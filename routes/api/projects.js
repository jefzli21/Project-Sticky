const express = require('express')
const {
    createProject
} = require('../../controllers/projectController')
const router = express.Router()


//get all projects


//get a single project


//create a new project
router.post('/', createProject)



//delete a project



//update a project

module.exports = router