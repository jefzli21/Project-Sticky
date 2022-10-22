import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject, selectProject, selectProjects } from "../../store/projects";
import { Modal } from "../../context/Modal";
import "./RightBar.css";
import CreateProjectForm from "../ProjectForm/CreateProjectForm";
import Calendar from 'react-calendar'
import UpcomingTasks from "./UpcomingTasks";
import { fetchUserTasks, selectProjectTasks } from "../../store/tasks";

const RightBar = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const projects = useSelector(selectProjects());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [isShown, setIsShown] = useState(false);

  const tasks = useSelector(selectProjectTasks());

  useEffect(() => {
    dispatch(fetchUserTasks(sessionUser._id))
  }, [sessionUser._id])


  ////calendar////
  const [value, onChange] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();

    const proj = {
      title,
      description,
      creator: sessionUser._id,
    };
    dispatch(createProject(proj));
  };

  return (
    <div className="rightBar-container">
      <div className="task-box">
      <UpcomingTasks/>
      </div>
      <div id="create-button">
      <CreateProjectForm/>
      </div>
    </div>
  );
};

export default RightBar;
