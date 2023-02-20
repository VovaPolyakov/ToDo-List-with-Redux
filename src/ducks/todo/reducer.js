
import {ADD_TODO_DATA,DELETE_TODO_DATA,CHANGE_TODO_DATA} from './actions'
import { v4 as uuidv4 } from 'uuid';

export const initialToDoState ={
    data:{
        items:[
            {id:uuidv4(),name:'Make todo list.',status:true},
            {id:uuidv4(),name:'Import to GitHub.',status:true}
        ]
    },
    error:null,
    loading:false
}

export const toDoReducer = (state,action) => {
    switch(action.type){
        case ADD_TODO_DATA:
            return {...state,data:{items:[...state.data.items,{id:uuidv4(),name:action.payload,status:true}]}}
        case CHANGE_TODO_DATA:
            return{
                ...state,
            }
        case DELETE_TODO_DATA:
            return{...state,data:{items:[...state.data.items.filter((item) => item.id !== action.payload )]}}
            
        default: {
            return {
                ...state
            }
        }
    }
    
}