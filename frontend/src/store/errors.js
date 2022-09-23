import { combineReducers } from "redux";
import { sessionErrorsReducer } from './session';
import { projectErrorsReducer } from "./projects";
import { taskErrorsReducer } from "./tasks";
import { commentErrorsReducer } from "./comments";

export default combineReducers({
    session: sessionErrorsReducer,
    project: projectErrorsReducer,
    task: taskErrorsReducer,
    comment: commentErrorsReducer
});
