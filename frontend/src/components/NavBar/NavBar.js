import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import logo from '../../assets/sticky_logo.png';
import demo from '../../assets/demo-user.png'
import { AppBar, Autocomplete, Avatar, Badge, Icon, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { Box, width } from '@mui/system';
import { useState } from 'react';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  })

  const logoutUser = e => {
    e.preventDefault();
    dispatch(logout());
  }

  let profileButtons;

  if (!sessionUser) return null;

  if (sessionUser) {
    // console.log("DEBUG  aaaa", sessionUser)
    profileButtons = (<>
      <MenuItem><a className="user-account-link" href={`/home/${sessionUser._id}`}>My account</a></MenuItem>
      <MenuItem onClick={logoutUser}>Logout</MenuItem>
    </>)
  } else profileButtons = (<></>)

  const getLinks = () => {
    if (loggedIn) {
      return (
        <div className='links-nav'>
          <Link to={'/home'}>Home Page</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/projects/new'}>Make a new Project</Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      )
    } else {
      return (
        <div className='links-auth'>
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      )
    }
  }

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: "42%"
  }))
  const Icons = styled(Box)(({ theme }) => ({
    backgroundColor: 'white',
  }))

  return (
    <>
      <AppBar position='sticky'>
        <StyledToolbar className='toolbar'>
          <div className='nav-left'>
            <Link className='logo-name' to={'/home'}>
              <img alt='sticky-logo' style={{ height: '40px', width: '40px' }} src={logo}></img>
              <div className='name'>Sticky</div>
            </Link>

          </div>
          {/* <h1 id='project-sticky'>Project Sticky</h1> */}
          {/* <Search>
            <InputBase placeholder='search' />
          </Search> */}

          <Avatar
            id="avatar"
            sx={{ width: 30, height: 30 }}
            src={demo}
            onClick={e => setOpen(true)}
          />
        </StyledToolbar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={e => setOpen(false)}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          {profileButtons}

        </Menu>
      </AppBar>

      {/* <div className='nav-bar'>
            <Link to='/home'>
              <img className='nav-logo' src={logo} alt='sticky_logo' />
            </Link>
            <div className='nav-link'>
              { getLinks() }
            </div>
        </div> */}
    </>
  )
}

export default NavBar;
