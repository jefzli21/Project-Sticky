import jwtFetch from "./jwt";


//Task Actions//

const RECEIVE_TASK = "tasks/RECEIVE_TASK";
const RECEIVE_TASKS = "tasks/RECEIVE_TASKS";
const REMOVE_TASK = "tasks/REMOVE_TASK";
const RECEIVE_TASK_ERRORS = "tasks/RECEIVE_TASK_ERRORS";
const CLEAR_TASK_ERRORS = "tasks/CLEAR_TASK_ERRORS";


// selectors//

export const selectUserTasks = userId => state =>{
    if(!state || !state.tasks){
        return [];
    }else{
        
            let ov = Object.values(state.tasks);
            // .filter((project)=> project.creator._id === userId)
            // console.log(ov)
            return ov;
    }
}

export const selectUserOpenTasks = userId => state => {
    if (!state || !state.tasks) {
        return [];
    } else {
        let ov = Object.values(state.tasks).filter(t => !t.completed);
        return ov;
    }
}

export const selectProjectTasks = projectId => state =>{
    if(!state || !state.tasks){
        return [];
    }else{
        
            let ov = Object.values(state.tasks)
            return ov
            // let filtered
            // if(ov.project){
            //     filtered = ov.filter((task)=> task.project?._id === projectId || task.project === projectId)
            //     return filtered
            // }
            // .filter((task)=> task.project._id === projectId)
            // console.log(ov)
    }
}

export const selectTask = (taskId) => (state) => {
    return state.tasks ? state.tasks[taskId] : null;
}

//Action Creators//

export const receiveTask = task => ({
    type: RECEIVE_TASK,
    task
});

export const receiveTasks = tasks => ({
    type: RECEIVE_TASKS,
    tasks
});

export const removeTask = taskId => ({
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

export const fetchProjectTasks = (projectId) => async dispatch => {
    try{
        const res = await jwtFetch(`/api/tasks/project/${projectId}`);
        const tasks = await res.json();
        dispatch(receiveTasks(tasks));
        return tasks
    }catch(err){
        const resBody = await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors))
        }
    }
};

export const fetchUserTasks = (userId) => async dispatch => {
    try{
        const res = await jwtFetch(`/api/tasks/user/${userId}`);
        const tasks = await res.json();
        dispatch(receiveTasks(tasks));
        return tasks
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
        return task
    }catch(err){
        const resBody = await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors))
        }
    }
}

export const createTask = (taskData) => async dispatch =>{
    try{
        const res = await jwtFetch(`/api/tasks`,{
            method: 'POST',
            body: JSON.stringify(taskData)
        });
        const task = await res.json();
        dispatch(receiveTask(task));
        return task
    } catch(err){
        const resBody =  await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors));
        }
    }
}

export const updateTask = taskData => async dispatch =>{
    try{
        const res = await jwtFetch(`/api/tasks/${taskData._id}`,{
            method: 'PUT',
            body: JSON.stringify(taskData)
        });
        const task = await res.json();
        dispatch(receiveTask(task));
        return task
    }catch(err){
        const resBody = await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors))
        }
    }
}


export const deleteTask = taskId => async dispatch =>{
    try{
        const res = await jwtFetch(`/api/tasks/${taskId}`,{
            method: 'DELETE'
        })
        return dispatch(removeTask(taskId))
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
            nextState[action.task._id] = action.task;
            return nextState ;
        case RECEIVE_TASKS:
            // return {...action.tasks}
            action.tasks.forEach((task) => {
                nextState[task._id] = task;
                });
                return nextState;
        case REMOVE_TASK:
            delete nextState[action.taskId];
            return nextState;
        default:
            return state
    }
};

export default tasksReducer;