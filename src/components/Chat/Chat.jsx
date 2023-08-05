import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import messages from './store/state'
import MessageHistory from './MessageHistory/MessageHistory'



const Chat = () => {

  let [list, setList] = useState(() => {
    if (!messages) {
      return (
        {
          id: '',
          from: { name: '' },
          type: '',
          time: '',
          text: ''
        }
      )
    } else {
      return messages
    }
  })

  return (
    <Routes>
      <Route path='/chat' element={
        <div className="clearfix container-chat">
          <div className="chat">
            <div className="chat-history">
              <MessageHistory list={ list } />
            </div>
          </div>
        </div>
      } />
    </Routes>
  )
}

export default Chat


