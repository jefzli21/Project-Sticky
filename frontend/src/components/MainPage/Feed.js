import React, { useState } from 'react'
import './Feed.css'
import { Container, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import Tab from '@mui/material/Tab';





const Feed = () => {
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
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
            <h3 className="feed-header">Welcome</h3>
            <Box sx={{borderRadius: 99, border:1, borderColor:'background.paper'}}>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="My week"/>
                <Tab label="tasks completed"/>
                <Tab label="collaborators"/>
              </Tabs>
            </Box>
        </div>
    </>
  )
}

export default Feed
