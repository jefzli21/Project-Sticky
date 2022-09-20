import './MainPage.css';
import { Container } from '@mui/material';
import { SideBar } from './SideBar';
import Feed from './Feed';
import RightBar from './RightBar';

function MainPage(){
    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

    return(
        <>
           <div className='home-container'>
            <SideBar/>
            <Feed/>
            <RightBar/>
           </div>
        </>
    )
}

export default MainPage;
