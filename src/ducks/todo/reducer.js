
import {ADD_TODO_DATA,DELETE_TODO_DATA,CHANGE_TODO_DATA} from './actions'

export const initialToDoState ={
    data:{},
    error:null,
    loading:false
}

export const toDoReducer = (state,action) => {
    switch(action.type){
        case ADD_TODO_DATA:
            return{
                ...state,
            }
        case CHANGE_TODO_DATA:
            return{
                ...state,
            }
        case DELETE_TODO_DATA:
            return{
                 ...state,
            }
        default: {
            return {
                ...state
            }
        }
    }
    
}