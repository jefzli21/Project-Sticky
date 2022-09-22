import jwtFetch from "./jwt";


//Task Actions//

const RECEIVE_TASK = "tasks/RECEIVE_TASK";
const RECEIVE_TASKS = "tasks/RECEIVE_TASKS";
const REMOVE_TASK = "tasks/REMOVE_TASK";
const RECEIVE_TASK_ERRORS = "tasks/RECEIVE_TASK_ERRORS";
const CLEAR_TASK_ERRORS = "tasks/CLEAR_TASK_ERRORS";


//Action Creators//

export const receiveTask = task => ({
    type: RECEIVE_TASK,
    task
});

export const receiveTasks = tasks => ({
    type: RECEIVE_TASKS,
    tasks
});

export const removeProject = taskId => ({
    type: REMOVE_TASK,
    taskId
});


export const receiveErrors = errors => ({
    type: RECEIVE_TASK_ERRORS,
    errors
});

export const clearTaskErrors = errors => ({
    type: CLEAR_TASK_ERRORS,
    errors
});

//fetches

export const fetchTasks = () => async dispatch => {
    try{
        const res = await jwtFetch(`/api/tasks`);
        const tasks = await res.json();
        dispatch(receiveTasks(tasks));
    }catch(err){
        const resBody = await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors))
        }
    }
};

export const fetchTask = taskId => async dispatch =>{
    try{
        const res = await jwtFetch(`/api/tasks/${taskId}`);
        const task = await res.json();
        dispatch(receiveTask(task));
    }catch(err){
        const resBody = await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors))
        }
    }
}

export const createTask = taskData => async dispatch =>{
    try{
        const res = await jwtFetch(`api/tasks/`,{
            method: 'POST',
            body: JSON.stringify(taskData)
        });
        const task = await res.json();
        dispatch(receiveTask(task));
    } catch(err){
        const resBody =  await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors));
        }
    }
}

export const updateTask = taskData => async dispatch =>{
    try{
        const res = await jwtFetch(`api/tasks/${taskData.id}`,{
            method: 'PUT',
            body: JSON.stringify(taskData)
        });
        const task = await res.json();
        dispatch(receiveTask(task));
    }catch(err){
        const resBody = await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors))
        }
    }
}


export const deleteTask = taskId => async dispatch =>{
    try{
        const res = await jwtFetch(`api/tasks/${taskId}`,{
            method: 'DELETE'
        })
    }catch(err){
        const resBody = await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors))
        }
    }
}


const nullErrors = null;

export const taskErrorsReducer = (state = nullErrors, action) =>{
    switch(action.type){
        case RECEIVE_TASK_ERRORS:
            return action.errors;
        case RECEIVE_TASK:
        case RECEIVE_TASKS:
        case CLEAR_TASK_ERRORS:
            return nullErrors;
        default:
            return state;
    }
}


const tasksReducer = (state = {}, action) =>{
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type){
        case RECEIVE_TASK:
            return nextState[action.task.id] = action.task
        case RECEIVE_TASKS:
            return {...action.tasks}
        case REMOVE_TASK:
            delete nextState[action.taskId];
            return nextState;
        default:
            return state
    }
};

export default tasksReducer;