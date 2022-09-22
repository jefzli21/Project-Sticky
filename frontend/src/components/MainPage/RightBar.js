import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProject, selectProjects } from '../../store/projects';
import './RightBar.css';
const ModalContext = React.createContext()




const RightBar = () => {

  const dispatch = useDispatch();
  const sessionUser = useSelector(state=> state.session.user);
  const projects = useSelector(selectProjects());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [isShown, setIsShown] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();

    const proj = {
      title,
      description,
      creator: sessionUser._id
    }
    dispatch(createProject(proj))
  }

  return (
    <div className='project-container'>
        <div className='right-tab'>

      </div>
    </div>
    )
}

export default RightBar
