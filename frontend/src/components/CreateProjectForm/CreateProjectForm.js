import React from "react";
import { useState } from "react";
import {useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { createProject, selectProjects } from "../../store/projects";
import { Pane, Dialog, Button } from 'evergreen-ui'


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
    <div>
      <Pane>
      <Dialog
        isShown={isShown}
        title="Dialog title"
        onCloseComplete={() => setIsShown(false)}
        preventBodyScrolling
        confirmLabel="Custom Label"
        onConfirm= {handleSubmit}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />
          <input onClick={()=>setIsShown(false)} type="submit" value="Create Project" />
        </form>
      </Dialog>

      <Button onClick={() => setIsShown(true)}>Show Dialog</Button>
    </Pane>
    </div>

  );
}
