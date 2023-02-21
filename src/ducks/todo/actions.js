export const ADD_TODO_DATA = 'ADD_TODO_DATA';
export const DELETE_TODO_DATA = 'DELETE_TODO_DATA';
export const DONE_TODO_DATA = 'DONE_TODO_DATA';

export const addToDoData = (payload) => {
  return {
    type: ADD_TODO_DATA,
    payload,
  };
};

export const deleteToDoData = (payload) => {
  return {
    type: DELETE_TODO_DATA,
    payload,
  };
};

export const doneToDoData = (payload,id) => {
    return {
      type: DONE_TODO_DATA,
      payload,
      id,
    };
};