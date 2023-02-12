import React from 'react'
import styles from '../../styles/Home.module.scss'

const ToDoContainer = ({children}) => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>ToDo List</h1>
      {children}
    </div>
  )
}

export default ToDoContainer
