import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProject, selectProjects } from '../../store/projects';
import './RightBar.css';
import { SideSheet, Paragraph, Button } from 'evergreen-ui'





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
      <h1>Create a Project</h1>
        <div className='right-tab'>
          <SideSheet isShown={isShown} onCloseComplete={() => setIsShown(false)}>
            <Paragraph margin={40}>Basic Example</Paragraph>
          </SideSheet>
          <Button onClick={() => setIsShown(true)}>Show Basic Side Sheet</Button>
      </div>
    </div>
    )
}

export default RightBar
