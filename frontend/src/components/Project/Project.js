import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { selectProject, selectProjects } from '../../store/projects'
import { SideBar } from '../MainPage/SideBar'
import './Project.css'
import Tasks from '../Tasks/Tasks'
import CreateTask from '../TaskForms/CreateTask'
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material"


const Project = () => {
  const sessionUser = useSelector(state=> state.session.user)
  const { projectId }  = useParams();
  const project = useSelector(selectProject(projectId))

  const history = useHistory();
  const dispatch = useDispatch();

  const tasks = useSelector(selectProjectTasks())


  console.log(tasks)

  useEffect(()=>{
    dispatch(fetchProjectTasks(projectId))
  },[projectId])



  return (
    <div className='projectPage-container'>
        <SideBar/>
        <div className='project-right-container'>
          <div className='project-top'>
            <div className='project-title'>
              <h1>Project: graduation party - Lets go !!!</h1> 
            </div>  
            <div className='function-icons'>
              <div className='edit-icon'>
              <Button>
              <EditIcon fontSize='large'/>Edit Project
              </Button>
              </div>
              <div className='delete-icon'>
              <Button>
              <DeleteForeverIcon fontSize='large'/>Delete Project
              </Button> 
              </div>
            </div>
          </div>


          <div className='project-bottom'>
                <h2 className='Card'>In Progress</h2>
                <h2 className='Card'>Done</h2>
        </div>
        </div>
    </div>
  )
}

export default Project









// }

// export default Tasks;
