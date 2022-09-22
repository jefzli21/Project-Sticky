import { Link } from 'react-router-dom';
import './TicketCard.css'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject, fetchProjects, selectProjects,createProject } from '../../store/projects';
import { useEffect, useState } from 'react';

const TicketCard = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state)=> state.session.user); //grabbing sessionUser from session state
  const projects = useSelector(selectProjects()) //selected projects filtered by sessionUserId
  //for create a project
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(new Date());

  
  
  
  console.log(projects)
  
  useEffect(()=>{
    dispatch(fetchProjects())
  },[sessionUser]);
  
  if(!projects.length){
    return null;
  }

  if(projects.length){
    projects.filter((project)=> project.creator._id ? project.creator._id === sessionUser._id : null)
  }


  // project create


    
  // console.log(today)

  let today = new Date;
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getFullYear();
  today = yyyy + '/' + mm + '/' + dd;

  const handleSubmit = (e) =>{
      e.preventDefault();


      const proj = {
           title,
           description, 
           creator: sessionUser._id
          }
      dispatch(createProject(proj))
  }

  ///
  

  return (
    <>
    {projects.map((project,i)=>(
  <div className='card-container' key={i}>
    <div className='card'>
      <div className='card-info'>
        <div className='card-title'>
          <div className='card-top'>
            <div className='card-top-decor'>
              <PushPinIcon className='pushPin' />
              <CircularProgress value={40} color='green'>
                <CircularProgressLabel>40%</CircularProgressLabel>
              </CircularProgress>
            </div>
            <h4>{project.title}</h4>
          </div>
        </div>
        <p>{project.description}</p>
        <p>Deadline: {project.deadline}</p>
        <div className='card-functions'>
          <Button >
              <EditIcon/>
          </Button>
          <Button onClick={()=> dispatch(deleteProject(project._id))}>
              <DeleteForeverIcon/>
          </Button>
        </div>
      </div>
    </div>
  </div>
    ))}


    <h1>Create a Project</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="title" value={title} onChange={(e)=> setTitle(e.target.value)} required/>
            <input type="text" placeholder="description" value={description} onChange={(e) =>setDescription(e.target.value)}/>
            {/* <input type="date" value={deadline} onChange={(e)=> setDeadline(e.target.value)} /> */}
            <input type="submit" value="Create Project" />
        </form>

    </>
  )
}

export default TicketCard
