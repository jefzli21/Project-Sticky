import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import {
  selectTask,
  fetchTask,
  updateTask,
  clearTaskErrors,
} from "../../store/tasks";
import "./EditTask.css";

export default function EditTaskForm() {
  const dispatch = useDispatch();
  const { taskId } = useParams();
  const { projectId } = useParams();
  const history = useHistory();
  let taskData = useSelector(selectTask(taskId));
  const [task, setTask] = useState(taskData);
  const errors = useSelector((state) => state.errors.task);

  useEffect(() => {
    setTask(taskData);
  }, [taskData]);

  useEffect(() => {
    if (taskId) {
      dispatch(fetchTask(taskId));
    }
  }, [taskId]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateTask(task)).then(dispatch(clearTaskErrors()));
    if (task.title && task.deadline) {
      history.push(`/projects/${projectId}`);
    }
  }

  return (
    <div>
      {task && (
        <form className="edit-task-form">
          <div className="errors">{errors?.title} </div>
          <div className="errors">{errors?.deadline} </div>

          <label>
            Task Title:
            <input
              className="form-field"
              type="text"
              placeholder="title"
              value={task.title}
              onChange={(e) => {
                setTask({ ...task, title: e.target.value });
              }}
              required
            />
          </label>

          <label>
            Description:
            <input
              className="form-field"
              type="text"
              placeholder="description"
              value={task.description}
              onChange={(e) => {
                setTask({ ...task, description: e.target.value });
              }}
            />
          </label>

          <label>
            Deadline:
            <input
              className="form-field"
              type="date"
              value={task.deadline}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </label>

          <label>
            Priority: 
            <select id="priority"
              value={task.priority}
              onChange={(e) => {
                setTask({ ...task, priority: e.target.value });
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </label>


          <button id="edit" onClick={handleSubmit}>Submit</button>
        </form>
      )}
    </div>
  );
}
