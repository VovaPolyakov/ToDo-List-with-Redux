import React from 'react'
import styles from '../../styles/Home.module.scss'
import ToDoItem from '../ToDoItem'
import { useSelector } from 'react-redux';



const ToDoList = () => {
    const items = useSelector((state) => state.todo.data.items);
  return (
    <div className={styles.list_row}>
        <div className={styles.list}>
            <div className={styles.item_row}>
                {items.map((item) => (
                    console.log(item),
                    <ToDoItem items={item}/>
                ))}
            </div>
            <div className={styles.input}>
                <input className={styles.list_input}  placeholder='Add new todo...' type='text' ></input>
                <button className={styles.list_button}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default ToDoList
