import { Fragment } from 'react'
import './App.css'
import { ChatWindow, Header, Input } from './components'
import { MessageContextProvider } from './store/MessageContext'

function App() {
  return (
    <Fragment>
      <Header />
      <MessageContextProvider>
        <ChatWindow />
        <Input />
      </MessageContextProvider>
    </Fragment>
  )
}

export default App
