import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams, useHistory} from 'react-router-dom'
import {selectTask, fetchTask, updateTask} from '../../store/tasks'

export default function EditTaskForm() {
    const dispatch = useDispatch();
    const {taskId} = useParams();
    const history = useHistory();
    let taskData = useSelector(selectTask(taskId))
    const [task, setTask] = useState(taskData)

    // console.log(taskData)

    // console.log(taskId)

    useEffect(() => {
        setTask(taskData)
    }, [taskData])

    useEffect(() => {
        if(taskId){
            dispatch(fetchTask(taskId))
        }
    }, [taskId])

    function handleSubmit(e){
        e.preventDefault();
        dispatch(updateTask(task));
        history.push(`/projects/${taskData.project}`)
    }


    return (
        <div>
            {task && (
                <form className="create-task-form">
                    <input
                        className="form-field"
                        type="text"
                        placeholder="title"
                        value={task.title}
                        onChange={(e) => { setTask({ ...task, title: e.target.value }) }}
                        required
                    />
                    <input
                        className="form-field"
                        type="text"
                        placeholder="description"
                        value={task.description}
                        onChange={(e) => { setTask({ ...task, description: e.target.value }) }}
                    />
                    <input
                        className="form-field"
                        type="date"
                        value={task.deadline}
                        onChange={(e) => { console.log(e.target.value)}}
                    />
                    
                    <label>
                    priority
                    <select value={task.priority} onChange={(e) => { setTask({ ...task, priority: e.target.value }) }}>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                    </select>
                    </label>
                    
                    {/* <label>
                    completed?
                    <input
                        className="form-field"
                        type="checkbox"
                        checked={task.completed}
                        onChange={(e) => { setTask({ ...task, completed: e.target.value }) }}
                    />
                    </label> */}
                    
                    <button onClick={handleSubmit}>Submit</button>
                </form>
            )}
        </div>
    )
}


