import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { SideBar } from '../MainPage/SideBar';
import './Tasks.css';
import logo from '../../assets/demo-user.png'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { fetchUserTasks, selectUserTasks, updateTask } from '../../store/tasks';
import { deleteTask } from '../../store/tasks';


const Tasks = ({ id, title, description, deadline }) => {
    const sessionUser = useSelector(state => state.session.user);
    const history = useHistory();
    const dispatch = useDispatch();

    const tasks = useSelector(selectUserTasks())

    useEffect(() => {
        dispatch(fetchUserTasks(sessionUser._id))
    }, [sessionUser._id])


    function handleTaskCheckboxClick(task) {
        const isChecked = document.getElementById(`checkbox_${task._id}`).checked
        const newTask = { ...task };
        newTask.completed = isChecked;
        dispatch(updateTask(newTask))
    }

    return (
        <div className='main-container'>
            <SideBar />
            <div className='task-container'>
                {tasks.map((task, i) => {
                    return (
                        <Card className='task-top' key={i}>
                            <CardActionArea>
                                <CardContent>
                                    <div className='top-left'>
                                        <Typography gutterBottom variant='h5' component='div'>
                                            Task: {task.title}
                                        </Typography>
                                        <Typography className='top-text' variant="body2" color="text.secondary" component="span">
                                            Details: {task.description}
                                        </Typography>
                                        <Typography>{task.comments.map((comment) => comment.body)}</Typography>
                                    </div>
                                    <div className='top-right'>
                                        <div>
                                            <input type="checkbox" defaultChecked={task.completed} id={`checkbox_${task._id}`} onChange={() => handleTaskCheckboxClick(task)} />
                                        </div>
                                        <Button onClick={() => history.push(`/projects/${task.project}/${task._id}`)}>
                                            <EditIcon />
                                        </Button>
                                        <Button onClick={() => dispatch(deleteTask(task._id))}>
                                            <DeleteForeverIcon />
                                        </Button>
                                    </div>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Tasks;
