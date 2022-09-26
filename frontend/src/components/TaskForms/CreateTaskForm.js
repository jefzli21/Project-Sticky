import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { createTask, fetchUserTasks, selectUserTasks } from "../../store/tasks";
import { Pane, Dialog, Button, PlusIcon } from 'evergreen-ui';
import './CreateTask.css'




const CreateTaskForm = () =>{
    const dispatch = useDispatch();
    const sessionUser = useSelector((state)=> state.session.user);
    const tasks = useSelector(selectUserTasks())
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState('');
    const [priority, setPriority] = useState(1);
    const { projectId } = useParams();
    const [isShown, setIsShown] = useState(false);

    const handleSubmit = (e) =>{
        setIsShown(false)
        const taskData ={
            title,
            description,
            deadline,
            priority,
            project: projectId,
            creator: sessionUser._id
        }
        dispatch(createTask(taskData))
    }

    // useEffect(()=>{
    //     dispatch(fetchUserTasks())
    // },[])
    

    return(
        <div>
            <Pane>
            <Dialog
            isShown={isShown}
            title="Task Form"
            onCloseComplete={() => setIsShown(false)}
            preventBodyScrolling
            confirmLabel="Create Task"
            onConfirm= {handleSubmit}
        >   
        <h1>Create Task</h1>
            <form className="create-task-form" onSubmit={handleSubmit}>
                <input
                                placeholder="title"
                className="form-field"
                type="text" 
                value={title} 
                onChange={(e)=> setTitle(e.target.value)}
                />
                <input
                                placeholder="description"
                className="form-field"
                type="text" 
                value={description} 
                onChange={(e)=> setDescription(e.target.value)}/>
                <input className="form-field" type="date" value={deadline} onChange={(e)=> setDeadline(e.target.value)} />
                
                <label>Choose a priority level:</label>
                <select className="form-field" value={priority} onChange={(e)=> setPriority(e.target.value)}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                </select>
                {/* <input className="form-field" type="submit" value="Create Task"/> */}
            </form>
        </Dialog>
            <Button className="button" onClick={()=> setIsShown(true)}>
                Add a New Task
            </Button>
        </Pane>
        </div>
    )
    
    
    
}

export default CreateTaskForm;