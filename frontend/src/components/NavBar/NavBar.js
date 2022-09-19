import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';


const NavBar = () => {
  const loggedIn = useSelector(state => !!state.session.user);
  const dispatch = useDispatch();

  const logoutUser = e => {
    e.preventDefault();
    dispatch(logout());
  }

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

  return (
    <>
        <h1>Project Sticky</h1>
        { getLinks() }
    </>
  )
}

export default NavBar;
