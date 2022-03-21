import { createContext, useState } from 'react'

const MessageContext = createContext()

export const MessageContextProvider = (props) => {
  const [messages, setMessages] = useState(getMessagesFromLocalStorage())

  function getMessagesFromLocalStorage() {
    let memory = localStorage.getItem('messages')
    if (memory) {
      return JSON.parse(memory)
    } else {
      return []
    }
  }

  function addMessageHandler(message) {
    if (message.length <= 0) return
    setMessages((prevMessages) => {
      let res = [...prevMessages, message]
      // save to localstorage
      localStorage.setItem('messages', JSON.stringify(res))
      return res
    })
  }

  return (
    <MessageContext.Provider
      value={{
        addMessage: addMessageHandler,
        messages: messages,
      }}
    >
      {props.children}
    </MessageContext.Provider>
  )
}

export default MessageContext
