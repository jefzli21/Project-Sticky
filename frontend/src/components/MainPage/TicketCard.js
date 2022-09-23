import { Link, useParams } from "react-router-dom";
import "./TicketCard.css";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import PushPinIcon from "@mui/icons-material/PushPin";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProject,
  fetchProjects,
  selectProjects,
  createProject,
  selectProject,
} from "../../store/projects";
import { useEffect, useState } from "react";

const TicketCard = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user); //grabbing sessionUser from session state
  const projects = useSelector(selectProjects(sessionUser._id));
  // projects filtered by sessionUserId
  //for create a project
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(null);

  useEffect(() => {
    dispatch(fetchProjects(sessionUser._id));
  }, [sessionUser]);

  if (!projects.length) {
    return null;
  }

  // if(projects.length){
  //   projects.filter((project)=> project.creator._id ? project.creator._id === sessionUser._id : null)
  // }

  // project create

  // console.log(today)

  let today = new Date().toISOString();

  const handleSubmit = (e) => {
    e.preventDefault();

    const proj = {
      title,
      description,
      creator: sessionUser._id,
      deadline: today,
    };
    dispatch(createProject(proj));
  };

  ///

  return (
    <>
      <div className="card-container">
        {projects.map((project, i) => (
          <div className="card" key={i}>
            <div className="card-info">
              <div className="card-title">
                <Link to={`/projects/${project._id}`}>
                  <div className="card-top">
                    <div className="card-top-decor">
                      <PushPinIcon className="pushPin" />
                      <CircularProgress value={40} color="green">
                        <CircularProgressLabel>40%</CircularProgressLabel>
                      </CircularProgress>
                    </div>
                    <h4>{project.title}</h4>
                  </div>
                </Link>
              </div>
              <div className="project-content">
                <p className="description">{project.description}</p>
              </div>

              <div className="project-bot">
                <p className="deadline">Deadline: {project.deadline}</p>
                <div className="card-functions">
                  <Button>
                    <EditIcon />
                  </Button>
                  <Button onClick={() => dispatch(deleteProject(project._id))}>
                    <DeleteForeverIcon />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TicketCard;
