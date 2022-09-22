import jwtFetch from "./jwt";

//Project Actions//

const RECEIVE_PROJECT = "projects/RECEIVE_PROJECT";
const RECEIVE_PROJECTS = "projects/RECEIVE_PROJECTS";
const REMOVE_PROJECT = "projects/REMOVE_PROJECT";
const RECEIVE_PROJECT_ERRORS = "projects/RECEIVE_PROJECT_ERRORS";
const CLEAR_PROJECT_ERRORS = "projects/CLEAR_PROJECT_ERRORS"


//thunk action creators//

export const receiveProject = project => ({
    type: RECEIVE_PROJECT,
    project
})

export const receiveProjects = projects => ({
    type: RECEIVE_PROJECTS,
    projects
})

export const removeProject = projectId => ({
    type: REMOVE_PROJECT,
    projectId
})

export const receiveErrors = errors => ({
    type: RECEIVE_PROJECT_ERRORS,
    errors
})

export const clearProjectErrors = errors => ({
    type: CLEAR_PROJECT_ERRORS,
    errors
})


// fetches

export const fetchProjects = () => async dispatch =>{
    try{
        const res = await jwtFetch(`/api/projects`);
        const projects = await res.json();
        dispatch(receiveProjects(projects));
    } catch(err) {
        const resBody = await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors));
        }
    }
}

export const fetchProject = projectId => async dispatch =>{
    try{
        const res = await jwtFetch(`/api/projects/${projectId}`);
        const project = await res.json();
        dispatch(receiveProject(project));
    } catch(err) {
        const resBody = await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors));
        }
    }
}

export const createProject = projectData => async dispatch =>{
    try{
        const res = await jwtFetch(`api/projects/`, {
            method: 'POST',
            body: JSON.stringify(projectData)
        });
        const project = await res.json();
        dispatch(receiveProject(project))
    } catch(err){
        const resBody =  await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors));
        }
    }
}

export const updateProject = projectData => async dispatch =>{
    try{
        const res = await jwtFetch(`api/projects/${projectData.id}`,{
            method: 'PUT',
            body: JSON.stringify(projectData)
        });
        const project = await res.json();
        dispatch(receiveProject(project))
    } catch(err){
        const resBody = await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors))
        }
    }
}


export const deleteProject = projectId => async dispatch =>{
    try{
        const res = await jwtFetch(`api/projects/${projectId}`,{
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

export const projectErrorsReducer = (state = nullErrors, action) => {
    switch(action.type) {
      case RECEIVE_PROJECT_ERRORS:
        return action.errors;
      case RECEIVE_PROJECT:
      case RECEIVE_PROJECTS:
      case CLEAR_PROJECT_ERRORS:
        return nullErrors;
      default:
        return state;
    }
  };


  const projectsReducer = (state = {}, action) => {

        Object.freeze(state)
        const nextState = {...state}
        switch(action.type){
            case RECEIVE_PROJECT:
                return nextState[action.project.id]= action.project;
            case RECEIVE_PROJECTS:
                return {...action.projects}
            case REMOVE_PROJECT:
                delete nextState[action.projectId];
                return nextState;
            default:
                return state;
        }
    
  }

  export default projectsReducer;