import jwtFetch from "./jwt";

//Comments Actions//

const RECEIVE_COMMENT = "comments/RECEIVE_COMMENT";
const RECEIVE_COMMENTS = "comments/RECEIVE_COMMENTS";
const REMOVE_COMMENT = "comments/REMOVE_COMMENT";
const RECEIVE_COMMENT_ERRORS = "comments/RECEIVE_COMMENT_ERRORS";
const CLEAR_COMMENT_ERRORS = "comments/CLEAR_COMMENT_ERRORS";

//Action Creators//

export const receiveComment = comment =>({
    type: RECEIVE_COMMENT,
    comment
});

export const receiveComments = comments =>({
    type: RECEIVE_COMMENTS,
    comments
});

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const receiveErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const clearCommentErrors = errors => ({
    type: CLEAR_COMMENT_ERRORS,
    errors
});


// fetches

export const fetchComments = taskId => async dispatch =>{
    try{
        const res = await jwtFetch(`/api/comments/tasks/${taskId}`);
        const comments = await res.json();
        dispatch(receiveComments(comments));
    }catch(err) {
        const resBody = await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors));
        }
    }
}


export const createComment = commentData => async dispatch =>{
    try{
        const res = await jwtFetch(`api/comments`,{
            method: 'POST',
            body: JSON.stringify(commentData)
        });
        const comment = await res.json();
        dispatch(receiveComment(comment));
    }catch(err){
        const resBody =  await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors));
        }
    }
}

export const updateComment = commentData => async dispatch =>{
    try{
        const res = await jwtFetch(`api/comments/${commentData.id}`,{
            method:"PUT",
            body: JSON.stringify(commentData)
        });
        const comment = await res.json();
        dispatch(receiveComment(comment))
    }catch(err){
        const resBody = await err.json();
        if(resBody.statusCode === 400 || resBody.statusCode === 404){
            return dispatch(receiveErrors(resBody.errors))
        }
    }
}


export const deleteComment = commentData => async dispatch =>{
    try{
        const res = await jwtFetch(`api/comments/${commentData.id}`,{
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

export const commentErrorsReducer = (state = nullErrors, action) => {
    switch(action.type) {
      case RECEIVE_COMMENT_ERRORS:
        return action.errors;
      case RECEIVE_COMMENT:
      case RECEIVE_COMMENTS:
      case CLEAR_COMMENT_ERRORS:
        return nullErrors;
      default:
        return state;
    }
  };


const commentsReducer = (state={}, action)=>{

    Object.freeze(state);
    const nextState = {...state};
    switch(action.type){
        case RECEIVE_COMMENT:
            return nextState[action.comment.id] = action.comment;
        case RECEIVE_COMMENTS:
            return {...action.comments};
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;