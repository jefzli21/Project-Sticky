import { Link, useHistory, useParams } from "react-router-dom";
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
} from "../../store/projects";
import { useEffect, useRef, useState } from "react";
import { useTransition, animated, useSpring, config } from "react-spring";
import { format } from "date-fns";

const TicketCard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user); //grabbing sessionUser from session state
  const projects = useSelector(selectProjects(sessionUser._id));
  // projects filtered by sessionUserId
  //for create a project
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(new Date().toISOString());

  //using react spring
  const props = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -100 },
    reset: true,
    config: config.slow,
  });

  const transition = useTransition(projects, {
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  ////react spring
  useEffect(() => {
    dispatch(fetchProjects(sessionUser._id));
  }, [sessionUser]);

  if (!projects.length) {
    return null;
  }

  // let today = new Date().toISOString();
  const handleSubmit = (e) => {
    e.preventDefault();

    const proj = {
      title,
      description,
      creator: sessionUser._id,
      deadline: deadline,
    };
    dispatch(createProject(proj));
  };

  function percentage(project) {
    if (!project.tasks) {
      return null;
    }
    const total = project.tasks.length;
    let count = 0;
    project.tasks.forEach((task) => {
      if (task.completed === true) {
        count += 1;
      }
    });
    return (count / total) * 100;
  }

  return (
    <>
      <div className="card-container">
        <div className="cards">
          {projects.map((project, i) => ( percentage(project) !== 100 && (
            <animated.div className="card" style={props} key={i}>
              <div className="card-info">
                <div className="card-title">
                  <Link to={`/projects/${project._id}`}>
                    <div className="card-top">
                      <div className="card-top-decor">
                        <CircularProgress
                          fontSize="small"
                          value={percentage(project) ? percentage(project) : 0}
                          color="green"
                        >
                          <CircularProgressLabel>
                            {Math.floor(percentage(project))
                              ? Math.floor(percentage(project))
                              : 0}
                            %
                          </CircularProgressLabel>
                        </CircularProgress>
                      </div>
                      <h4 className="project-title">{project.title}</h4>
                    </div>
                  </Link>
                </div>
                <div className="project-content">
                  <p className="description">{project.description}</p>
                </div>
                <div className="project-bot">
                  <p className="deadline">{project.deadline}</p>
                  <div className="card-functions">
                    <Button
                      onClick={() =>
                        history.push(`/projects/${project._id}/edit`)
                      }
                    >
                      <EditIcon />
                    </Button>
                    <Button
                      onClick={() => dispatch(deleteProject(project._id))}
                    >
                      <DeleteForeverIcon />
                    </Button>
                  </div>
                </div>
              </div>
            </animated.div>
          )))}
        </div>
      </div>
    </>
  );
};

export default TicketCard;
