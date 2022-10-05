import jwtFetch from "./jwt";

//Project Actions//

const RECEIVE_PROJECT = "projects/RECEIVE_PROJECT";
const RECEIVE_PROJECTS = "projects/RECEIVE_PROJECTS";
const REMOVE_PROJECT = "projects/REMOVE_PROJECT";
const RECEIVE_PROJECT_ERRORS = "projects/RECEIVE_PROJECT_ERRORS";
const CLEAR_PROJECT_ERRORS = "projects/CLEAR_PROJECT_ERRORS";

//thunk action creators//

export const receiveProject = (project) => ({
  type: RECEIVE_PROJECT,
  project,
});

export const receiveProjects = (projects) => ({
  type: RECEIVE_PROJECTS,
  projects,
});

export const removeProject = (projectId) => ({
  type: REMOVE_PROJECT,
  projectId,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors,
});

export const clearProjectErrors = (errors) => ({
  type: CLEAR_PROJECT_ERRORS,
  errors,
});

//selectors//

export const selectProjects = (authorId) => (state) => {
  if (!state || !state.projects) {
    return [];
  } else {
    let ov = Object.values(state.projects).filter(
      (proj) => proj.creator._id === authorId || proj.creator === authorId
    );
    // .filter((project)=> project.creator._id === userId)
    // console.log(ov)
    return ov;
  }
}

export const selectProject = (projectId) => (state) => {
  return state.projects ? state.projects[projectId] : null;
  
};

// fetches

export const fetchProjects = (userId) => async (dispatch) => {
  try {
    const res = await jwtFetch(`/api/projects/users/${userId}`);
    const projects = await res.json();
    dispatch(receiveProjects(projects));
    return projects
  } catch (err) {
    const resBody = await err.json();
    if (resBody.statusCode === 400 || resBody.statusCode === 404) {
      return dispatch(receiveErrors(resBody.errors));
    }
  }
};

export const fetchProject = (projectId) => async (dispatch) => {
  try {
    const res = await jwtFetch(`/api/projects/${projectId}`);
    const project = await res.json();
    dispatch(receiveProject(project));
    return project
  } catch (err) {
    const resBody = await err.json();
    if (resBody.statusCode === 400 || resBody.statusCode === 404) {
      return dispatch(receiveErrors(resBody.errors));
    }
  }
};

export const createProject = (projectData) => async (dispatch) => {
  try {
    const res = await jwtFetch(`/api/projects/`, {
      method: "POST",
      body: JSON.stringify(projectData),
    });
    const project = await res.json();
    dispatch(receiveProject(project));
    return project
  } catch (err) {
    // console.log(err);
    const resBody = await err.json();
    if (resBody.statusCode === 400 || resBody.statusCode === 404) {
      return dispatch(receiveErrors(resBody.errors));
    }
  }
};

export const updateProject = (projectData) => async (dispatch) => {
  try {
    const res = await jwtFetch(`/api/projects/${projectData._id}`, {
      method: "PUT",
      body: JSON.stringify(projectData),
    });
    const project = await res.json();
    dispatch(receiveProject(project));
    return project
  }
  catch (err) {
    // console.log(err);
    const resBody = await err.json();
    if (resBody.statusCode === 400 || resBody.statusCode === 404) {
      return dispatch(receiveErrors(resBody.errors));
    }
  }
};

export const deleteProject = (projectId) => async (dispatch) => {
  try {
    const res = await jwtFetch(`/api/projects/${projectId}`, {
      method: "DELETE",
    });
    return dispatch(removeProject(projectId))
  } catch (err) {
    const resBody = await err.json();
    if (resBody.statusCode === 400 || resBody.statusCode === 404) {
      return dispatch(receiveErrors(resBody.errors));
    }
  }
};

const nullErrors = null;

export const projectErrorsReducer = (state = nullErrors, action) => {
  switch (action.type) {
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
  Object.freeze(state);
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_PROJECT:
      nextState[action.project._id] = action.project;
      return nextState;
    case RECEIVE_PROJECTS:
      action.projects.forEach((project) => {
        nextState[project._id] = project;
      });
      return nextState;
    case REMOVE_PROJECT:
      delete nextState[action.projectId];
      return nextState;
    default:
      return state;
  }
};

export default projectsReducer;
