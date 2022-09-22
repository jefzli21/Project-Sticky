import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { SideBar } from '../MainPage/SideBar';
import './Project.css';
import logo from '../../assets/demo-user.png'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { fetchTasks, selectUserTasks } from '../../store/tasks';
import { selectProjects, fetchProjects } from '../../store/projects';



const Project = ({id, title, description, deadline}) => {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();
  
  const tasks = useSelector(selectUserTasks())

  const projects = useSelector(selectProjects()) //selected projects filtered by sessionUserId

  if(projects.length){
    projects.filter((project)=> project.creator._id === sessionUser._id );
    projects.filter((project)=> project.tasks.length > 1)
  }




  if(tasks.length){
      tasks.filter((task)=> task.worker._id === sessionUser._id)
    }

//   console.log(projects)
//   console.log(tasks)

  
    
    useEffect(()=>{
      dispatch(fetchProjects())
    },[]);

  useEffect(()=>{
    dispatch(fetchTasks())
  },[])

  //needs to have project belongs to from tasks

  



  return (
    <div className='main-container'>
        <SideBar/>
        <div className='project-container'>
            {tasks.map((task,i)=>{
                return (
            <Card className='project-top' key={i}>
                <CardActionArea>
                    <CardContent>
                        <div className='top-left'>
                        <Typography gutterBottom variant='h5' component='div'>
                            Task: {task.title}
                        </Typography>
                        <Typography className='top-text' variant="body2" color="text.secondary">
                            Details: {task.description}
                        </Typography>
                        <Typography>{task.comments.map((comment)=> comment.body)}</Typography>
                        </div>
                        <div className='top-right'>
                        <Button>
                            <EditIcon/>
                        </Button>
                        <Button>
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
