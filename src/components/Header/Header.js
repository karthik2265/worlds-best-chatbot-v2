import React from 'react'
import classes from './Header.module.css'

const header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.chatbotImage}></div>
      <h1 className={classes.chatbotName}>Michael Scott</h1>
    </div>
  )
}

export default header
