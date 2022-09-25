import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProject, selectProjects } from "../../store/projects";
import { Modal } from "../../context/Modal";
import "./RightBar.css";
import CreateProjectModal from "../ProjectForm/CreateProjectModal";
import CreateProjectForm from "../ProjectForm/CreateProjectForm";

const RightBar = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
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
      creator: sessionUser._id,
    };
    dispatch(createProject(proj));
  };

  return (
    <CreateProjectForm/>
    // <div className="project-container">
    //   <div className="right-tab">
    //     <div onClick={() => setShow(true)}> Create a Project</div>
    //     {show && (
    //       <Modal>
    //         <form onSubmit={handleSubmit}>
    //           <input
    //             type="text"
    //             placeholder="title"
    //             value={title}
    //             onChange={(e) => setTitle(e.target.value)}
    //             required
    //           />
    //           <input
    //             type="text"
    //             placeholder="description"
    //             value={description}
    //             onChange={(e) => setDescription(e.target.value)}
    //           />
    //           <input
    //             type="date"
    //             value={deadline}
    //             onChange={(e) => setDeadline(e.target.value)}
    //           />
    //           <input type="submit" value="Create Project" />
    //         </form>
    //       </Modal>
    //     )}
    //   </div>
    // </div>
  );
};

export default RightBar;
