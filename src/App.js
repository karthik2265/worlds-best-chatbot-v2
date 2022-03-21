import { Fragment } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ChatWindow from './components/ChatWindow/ChatWindow'
import Input from './components/Input/Input'
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
