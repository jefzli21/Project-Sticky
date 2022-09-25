import React from 'react'

import { Pane, Dialog, Button } from 'evergreen-ui'
import CreateProjectForm from './CreateProjectForm'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject, selectProjects } from "../../store/projects";

function CreateProjectModal () {
  const [isShown, setIsShown] = React.useState(false)
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const projects = useSelector(selectProjects());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(new Date());

  const handleSubmit = (e) => {

    const proj = {
      title,
      description,
      creator: sessionUser._id,
    };
    dispatch(createProject(proj));
  };

  return (
    <></>
    // <Pane >
    // <Dialog
    //   isShown={isShown}
    //   title="Dialog title"
    //   onCloseComplete={() => setIsShown(false)}
    //   onClick={handleSubmit}
    //   confirmLabel="Submit"
    //   onConfirm = {handleSubmit}
    // >
    //   <CreateProjectForm/>
    // </Dialog>

    // <Button onClick={() => setIsShown(true)}>Show Dialog</Button>
    // </Pane>
  )
}

export default CreateProjectModal;
