import React from 'react'
import { useContext, useRef, useEffect } from 'react'
import MessageContext from '../store/MessageContext'
import { Fragment } from 'react'
import classes from './ChatWindow.module.css'

const ChatWindow = () => {
  const messageContext = useContext(MessageContext)
  // to always show the last element
  const dummyDiv = useRef()

  // messages
  const messageElements = messageContext.messages.map((message) => {
    return (
      <Fragment key={Math.random()}>
        <p className={classes.userMessage + ' ' + classes.message}>{message}</p>
        <p className={classes.botMessage + ' ' + classes.message}>{message}</p>
      </Fragment>
    )
  })

  // effect to show last message
  useEffect(() => {
    dummyDiv.current.scrollIntoView()
  }, [messageElements])

  const Intro = () => {
    return (
      <h1 className={classes.intro}>
        Meet Michael Scoot , the funniest chatbot 😁. Talk to him to know him
        better
      </h1>
    )
  }
  const showIntro = messageElements.length === 0

  return (
    <div className={classes.chatWindow}>
      {showIntro && <Intro />}
      {messageElements}
      <div ref={dummyDiv}></div>
    </div>
  )
}

export { ChatWindow }
