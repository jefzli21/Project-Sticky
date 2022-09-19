import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import { logout } from '../../store/session';
import logo from '../../assets/sticky_logo.png'

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
        <div className='nav-bar'>
          <Link to='/home'>
            <img className='nav-logo' src={logo} alt='sticky_logo' />
          </Link>
          <div className='nav-link'>
            { getLinks() }
          </div>
        </div>
    </>
  )
}

export default NavBar;
