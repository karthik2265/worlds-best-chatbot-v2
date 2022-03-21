import React from 'react'
import classes from './Input.module.css'
import { useState, useContext } from 'react'
import MessageContext from '../../store/MessageContext'

const Input = () => {
  const [message, setMessage] = useState('')
  const messageContext = useContext(MessageContext)

  function messageChangeHandler(event) {
    let value = event.target.value
    setMessage(value)
  }

  function buttonClickHandler() {
    messageContext.addMessage(message)
    setMessage('')
  }

  return (
    <div className={classes.inputSpace}>
      <input
        className={classes.input}
        type='text'
        value={message}
        onChange={messageChangeHandler}
      ></input>
      <button className={classes.button} onClick={buttonClickHandler}>
        Send
      </button>
    </div>
  )
}

export default Input
