export const ADD_TODO_DATA = 'ADD_TODO_DATA';
export const DELETE_TODO_DATA = 'DELETE_TODO_DATA';
export const CHANGE_TODO_DATA = 'CHANGE_TODO_DATA';

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

export const changeToDoData = (payload) => {
    return {
      type: CHANGE_TODO_DATA,
      payload,
    };
};