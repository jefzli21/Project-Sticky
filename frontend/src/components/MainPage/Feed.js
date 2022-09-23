import React, { useState } from 'react'
import './Feed.css'
import { Container, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import Tab from '@mui/material/Tab';
import TicketCard from './TicketCard';
import { useSelector } from 'react-redux';



const Feed = () => {
  const sessionUser = useSelector(state=> state.session.user)
  const current = new Date();
  const date = `${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`;
  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  return (
    <>
        <div className='feed-container'>
            <h4 className='feed-date'>
                Today is {date}
            </h4>
            <h3 className="feed-header">Welcome, {sessionUser.username}</h3>
            <Box sx={{borderRadius: 5, borderColor:'background.paper'}}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="My Projects"/>
                <Tab label="tasks completed"/>
                <Tab label="collaborators"/>
              </Tabs>
            </Box>
            <TicketCard/>
        </div>
    </>
  )
}

export default Feed
