import React from 'react';
import './SideBar.css'
import People from '@mui/icons-material/People';
import PermMedia from '@mui/icons-material/PermMedia';
import Dns from '@mui/icons-material/Dns';
import Public from '@mui/icons-material/Public';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useHistory } from 'react-router-dom';
import TaskIcon from '@mui/icons-material/Task';
import InboxIcon from '@mui/icons-material/Inbox';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FlagCircleIcon from '@mui/icons-material/FlagCircle';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { Button, Switch } from '@mui/material';








export const SideBar = ({mode, setMode}) => {
  const history = useHistory();

  const data = [
    { icon: <People />, label: 'Feature1'},
    { icon: <Dns/>, label: 'Feature2'},
    { icon: <PermMedia />, label: 'Feature3'},
    { icon: <Public/>, label: 'Feature4'},
  ];




  return (
    <div className='sideBar-container'>
      <List>
        <ListItem disablePadding>
          <Link to={'/home'} style={{color: 'inherit', textDecoration:'none'}}>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to={'/tasks'} style={{color: 'inherit', textDecoration:'none'}}>
            <ListItemButton>
              <ListItemIcon>
                <TaskIcon/>
              </ListItemIcon>
                <ListItemText primary="My Tasks" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to={'/completed'} style={{color: 'inherit', textDecoration:'none'}}>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon/>
              </ListItemIcon>
              <ListItemText primary="Completed Projects" />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </div>
  )
}
