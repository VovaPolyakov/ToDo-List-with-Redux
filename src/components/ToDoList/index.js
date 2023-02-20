import React from 'react'
import styles from '../../styles/Home.module.scss'
import ToDoItem from '../ToDoItem'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToDoData } from '../../ducks/todo/actions';



const ToDoList = () => {
    const [data,setData] = useState({})
    const items = useSelector((state) => state.todo.data.items);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setData(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(addToDoData(data));
    }

  return (
    <div className={styles.list_row}>
        <div className={styles.list}>
            <div className={styles.item_row}>
                {items.map((item) => (
                    <ToDoItem items={item}/>
                ))}
            </div>
            <div className={styles.input}>
                <input className={styles.list_input} onChange={handleChange}  placeholder='Add new todo...' type='text' ></input>
                <button className={styles.list_button} onClick={handleClick} >Add</button>
            </div>
        </div>
    </div>
  )
}

export default ToDoList
