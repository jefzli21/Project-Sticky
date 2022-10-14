import React, { useEffect } from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { clearProjectErrors, createProject, selectProjects } from "../../store/projects";
import { Pane, Dialog, Button, PlusIcon } from 'evergreen-ui';
import './CreateProjectForm.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default function CreateProjectForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const projects = useSelector(selectProjects());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState(new Date());
  const [isShown, setIsShown] = useState(false);
  const errors = useSelector(state => state.errors.project);
  // console.log(errors)

  const handleSubmit = (e) => {
    const proj = {
      title,
      description,
      creator: sessionUser._id,
      deadline,
    };
    dispatch(createProject(proj))
      .then(dispatch(clearProjectErrors()))
    if (proj.title) {
      setIsShown(false)
      window.location.reload(false);
    }
  };

  return (
    <div >

      <Pane>
        <Dialog
          isShown={isShown}
          title="Create a Project"
          onCloseComplete={() => setIsShown(false)}
          // preventBodyScrolling
          confirmLabel="Create Project"
          onConfirm={handleSubmit}
        >
          <form className="create-project-form" onSubmit={handleSubmit}>
            <div className='errors'>{errors?.title}</div>

            <label>
              Project Title:
              <input
                className="form-field"
                type="text"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>

            <label>
              Description:
              <input
                className="form-field"
                type="text"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength="80"
              />
            </label>

            <label>
              Deadline:
              {/* <input
                className="form-field"
                id="form-date-field"
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              /> */}
              <DatePicker
                id="reserv-datepicker"
                className="form-field"
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                selected={deadline}
                onChange={(date) => setDeadline(date)}
              />
            </label>

          </form>
        </Dialog>
        <PlusIcon className="btn" onClick={() => setIsShown(true)}></PlusIcon>
      </Pane>
    </div>
  );
}
