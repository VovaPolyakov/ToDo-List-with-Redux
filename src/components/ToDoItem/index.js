import React from 'react'
import styles from '../../styles/Home.module.scss'
import {FaRegTrashAlt} from 'react-icons/fa'
import {TbEdit} from 'react-icons/tb'
import { useDispatch } from 'react-redux'
import { deleteToDoData } from '../../ducks/todo/actions'

const ToDoItem = ({items}) => {
  const dispatch = useDispatch();
  const handleClick = (e) => {
    dispatch(deleteToDoData(e.target.id))
  }
  return (
    <div className={styles.item} id={items.id}>
        <div className={styles.item_text}>
            {items.name}
        </div>
        <div className={styles.item_buttons}>
            <FaRegTrashAlt id={items.id} onClick={handleClick} className={styles.item_trash} size={20}/>
            <TbEdit className={styles.item_edit} size={22}/>
        </div>
    </div>
  )
}

export default ToDoItem
