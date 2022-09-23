import React from "react";
import { useState } from "react";
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { createProject, selectProjects } from "../../store/projects";
import { Pane, Dialog, Button, PlusIcon } from 'evergreen-ui';
import './CreateProjectForm.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function CreateProjectForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const projects = useSelector(selectProjects());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [isShown, setIsShown] = useState(false);


  const handleSubmit = (e) => {
    // e.preventDefault();
    setIsShown(false)
    const proj = {
      title,
      description,
      creator: sessionUser._id,
    };
    dispatch(createProject(proj));
  };
  return (
    <div >

      <Pane>
      <Dialog
        isShown={isShown}
        title="Create a Project"
        onCloseComplete={() => setIsShown(false)}
        preventBodyScrolling
        confirmLabel="Create Project"
        onConfirm= {handleSubmit}
      >
        <form className="create-project-form" onSubmit={handleSubmit}>
          <input
            className="form-field"
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            className="form-field"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="form-field"
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

        </form>
      </Dialog>

      <PlusIcon className="btn"  onClick={() => setIsShown(true)}></PlusIcon>
    </Pane>
    </div>
  );
}
