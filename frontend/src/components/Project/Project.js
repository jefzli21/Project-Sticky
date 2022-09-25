import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectProject, selectProjects } from '../../store/projects'
import { SideBar } from '../MainPage/SideBar'
import './Project.css'
import Tasks from '../Tasks/Tasks'
import CreateTask from '../TaskForms/CreateTask'

const Project = () => {
  const sessionUser = useSelector(state=> state.session.user)
  const { projectId }  = useParams();
  const project = useSelector(selectProject(projectId))


  return (
    <div>
        <CreateTask/>
    </div>
  )
}

export default Project
