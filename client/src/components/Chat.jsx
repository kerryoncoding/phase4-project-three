

import React, { useContext } from "react"
import ThemeContext from './ThemeContext'

function Chat() {

   const { theme } = useContext(ThemeContext);

   return (
      <div className={`your-component ${theme}`}>
         <div className="card-container">

            <h1>Welcome to the Chatroom!</h1>
            <hr className="breakline" />
            <h3>TBD</h3>
         </div>

      </div>
   )
}

export default Chat
