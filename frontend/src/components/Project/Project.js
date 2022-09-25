import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useHistory, useParams } from 'react-router-dom'
import { selectProject, selectProjects } from '../../store/projects'
import { SideBar } from '../MainPage/SideBar'
import './Project.css'
import Tasks from '../Tasks/Tasks'
import CreateTask from '../TaskForms/CreateTaskForm'
import { fetchProjectTasks, selectProjectTasks, deleteTask } from '../../store/tasks'
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


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
    <div className='main-container'>
        <div className='task-container'>
            {tasks.map((task,i)=>{
                return (
            <Card className='task-top' key={i}>
                <CardActionArea>
                    <CardContent>
                        <div className='top-left'>
                        <Typography gutterBottom variant='h5' component='div'>
                            Task: {task.title}
                        </Typography>
                        <Typography className='top-text' variant="body2" color="text.secondary">
                            Details: {task.description}
                        </Typography>
                        {/* <Typography>{task.comments.map((comment)=> comment.body)}</Typography> */}
                        </div>
                        <div className='top-right'>
                        <Button onClick={()=> history.push(`/projects/${projectId}/${task._id}`)}>
                            <EditIcon/>
                        </Button>
                        <Button onClick={()=> dispatch(deleteTask(task._id))}>
                            <DeleteForeverIcon/>
                        </Button>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
           )})}
        </div>
    </div>
  )
}

export default Project









// }

// export default Tasks;
