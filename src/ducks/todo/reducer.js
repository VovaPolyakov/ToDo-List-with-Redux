
import {ADD_TODO_DATA,DELETE_TODO_DATA,DONE_TODO_DATA} from './actions'
import { v4 as uuidv4 } from 'uuid';

export const initialToDoState ={
    data:{
        items:[
            {id:uuidv4(),name:'Make todo list.',status:false},
            {id:uuidv4(),name:'Import to GitHub.',status:false}
        ]
    },
    error:null,
    loading:false
}

export const toDoReducer = (state,action) => {
    switch(action.type){
        case ADD_TODO_DATA:
            return {...state,data:{items:[...state.data.items,{id:uuidv4(),name:action.payload,status:false}]}}
        case DONE_TODO_DATA:
            const updateArray = state.data.items.map((item) => {
                if(item.id === action.id){
                    return{
                        ...item,
                        status:!action.payload
                    }
                }
                return item
            })
            return {...state,data:{items:updateArray}}
        case DELETE_TODO_DATA:
            return{...state,data:{items:[...state.data.items.filter((item) => item.id !== action.payload )]}}
            
        default: {
            return {
                ...state
            }
        }
    }
    
}