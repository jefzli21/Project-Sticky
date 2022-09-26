import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { selectProject, selectProjects } from '../../store/projects'
import { SideBar } from '../MainPage/SideBar'
import './Project.css'
import Tasks from '../Tasks/Tasks'
import CreateTaskForm from '../TaskForms/CreateTaskForm'
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material"
import { deleteTask, fetchProjectTasks, selectProjectTasks } from '../../store/tasks';
import { useTransition, animated, useSpring, config } from "react-spring";




const Project = () => {
  const sessionUser = useSelector(state=> state.session.user)
  const { projectId }  = useParams();
  const project = useSelector(selectProject(projectId))

  const history = useHistory();
  const dispatch = useDispatch();

  const tasks = useSelector(selectProjectTasks())

    ///react spring implmentation again
    const props = useSpring({ 
      to: { opacity: 1, y: 0 }, 
      from: { opacity: 0, y: 100 },
      reset: true,
      config: config.slow
    })


  console.log(tasks)

  useEffect(()=>{
    dispatch(fetchProjectTasks(projectId))
  },[projectId])


  // if(!tasks.length){
  //   return null;
  // }






  return (
    <div className='projectPage-container'>
        <SideBar/>
        <div className='project-right-container'>
          <div className='project-top'>
            <div className='project-title'>
              <h1>Project: <span>{project.title}</span></h1>
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
                <div className='Card'>
                <h2>In Progress</h2>
                <CreateTaskForm className='create-task-button'/>
                <div className='task-Cards'>
                  {tasks.map((task, i)=> (
                    <animated.div
                    className='task-card'
                    style={props}
                    key={i}>
                      <div className='taskCard-info'>
                        <h2 className='taskCard-title'>{task.title}</h2>
                      </div>
                      <div className='taskCard-content'>
                        <p className='taskCard-description'>{task.description}</p>
                      </div>
                      <div className="taskCard-functions">
                        <Button >Edit Task
                          <EditIcon />
                        </Button>
                        <Button onClick={() => dispatch(deleteTask(task._id))}>Delete Task
                          <DeleteForeverIcon />
                        </Button>
                      </div>
                    </animated.div>
                  ))}
                </div>


                </div>
                <div className='Card'>
                <h2>Done</h2>
                </div>
        </div>
        </div>
    </div>
  )
}

export default Project









// }

// export default Tasks;
