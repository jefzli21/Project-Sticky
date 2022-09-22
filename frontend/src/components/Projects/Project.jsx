import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import { SideBar } from '../MainPage/SideBar';
import './Project.css';
import logo from '../../assets/demo-user.png'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';


const Project = ({id, title, description, deadline}) => {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();


  return (
    <div className='main-container'>
        <SideBar/>
        <div className='project-container'>
            <Card className='project-top'>
                <CardActionArea>
                    <CardContent>
                        <div className='top-left'>
                        <Typography gutterBottom variant='h5' component='div'>
                            Project: 求婚
                        </Typography>
                        <Typography className='top-text' variant="body2" color="text.secondary">
                            神啊救救我吧一把年紀了一個愛人都沒有孤獨是可憐的如果沒愛過人生是黑白的
                        </Typography>
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
        </div>
    </div>
  )
}

export default Project
