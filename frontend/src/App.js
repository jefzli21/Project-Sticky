import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Redirect, Route } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from './components/Routes/Routes';
import NavBar from './components/NavBar/NavBar'

import MainPage from './components/MainPage/MainPage';
import LoginForm from './components/SessionForms/LoginForm';
import SignupForm from './components/SessionForms/SignupForm';

import { getCurrentUser } from './store/session';
import { SideBar } from './components/MainPage/SideBar';
import Tasks from './components/Tasks/Tasks';
import Project from './components/Project/Project'
import CreateTask from './components/TaskForms/CreateTaskForm';
import EditTask from './components/TaskForms/EditTaskForm';
import EditProjectForm from './components/ProjectForm/EditProjectForm';
import EditTaskForm from './components/TaskForms/EditTaskForm';
import UserProfile from './components/UserProfile';
import Splash from './components/Splash/Splash';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCurrentUser()).then(()=> setLoaded(true))
  },[dispatch]);



  return loaded && (
    <>
      <NavBar/>
      <Switch>
        <AuthRoute exact path='/' component={Splash} />
        <ProtectedRoute exact path='/home' component={MainPage} />
        <ProtectedRoute exact path='/home/:userId' component={UserProfile} />
        <ProtectedRoute exact path='/projects/:projectId' component={Project} />
        <ProtectedRoute exact path='/tasks' component={Tasks} />
        <ProtectedRoute exact path='/projects/:projectId/createtask' component={CreateTask} />
        <ProtectedRoute exact path='/projects/:projectId/edit' component={EditProjectForm} />
        <ProtectedRoute exact path='/projects/:projectId/:taskId' component={EditTaskForm} />
        <AuthRoute exact path='/login' component={LoginForm} />
        <AuthRoute exact path='/signup' component={SignupForm} />
        <Redirect to='/' />
      </Switch>
    </>
  );
}

export default App;
