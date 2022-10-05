import './MainPage.css';
import { Container, createTheme, ThemeProvider } from '@mui/material';
import { SideBar } from './SideBar';
import Feed from './Feed';
import RightBar from './RightBar';
import { useState } from 'react';
import { Box } from '@mui/system';

function MainPage(){
    const [mode, setMode] = useState('light');

    const darkTheme = createTheme({
        palette:{
            mode: mode,
        },
    })
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    return(
        
                <div className='home-container'>
                    <SideBar setMode={setMode} mode={mode}/>
                    <Feed/>
                    <RightBar/>
                </div>
    
    )
}

export default MainPage;
