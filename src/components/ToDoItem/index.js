import React from 'react'
import styles from '../../styles/Home.module.scss'
import {FaRegTrashAlt} from 'react-icons/fa'
import {TbEdit} from 'react-icons/tb'

const ToDoItem = () => {
  return (
    <div className={styles.item}>
        <div className={styles.item_text}>
            Make ToDo List.
        </div>
        <div className={styles.item_buttons}>
            <FaRegTrashAlt className={styles.item_trash} size={20}/>
            <TbEdit className={styles.item_edit} size={22}/>
        </div>
    </div>
  )
}

export default ToDoItem
