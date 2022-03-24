import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.chatbotImage}></div>
      <h1 className={classes.chatbotName}>Michael Scott</h1>
    </div>
  )
}

export { Header }
