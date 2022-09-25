import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject, selectProjects } from "../../store/projects";
import { Modal } from "../../context/Modal";
import "./RightBar.css";
import CreateProjectModal from "../CreateProjectForm/CreateProjectModal";
import CreateProjectForm from "../CreateProjectForm/CreateProjectForm";
import Calendar from 'react-calendar'

const RightBar = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const projects = useSelector(selectProjects());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [isShown, setIsShown] = useState(false);

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
    <>
      <CreateProjectForm/>
    </>
  );
};

export default RightBar;
