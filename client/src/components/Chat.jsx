

import React, { useContext } from "react"
import ThemeContext from './ThemeContext'

function Chat() {

   const { theme } = useContext(ThemeContext);

   return (
      <div className={`your-component ${theme}`}>
         <div className="squad-container">
            <br/>
            <div className="card-container">

               <h1>Welcome to Live Chat!</h1>
               {/* <hr className="breakline" /> */}
               {/* <h3>TBD</h3> */}
               <div className="chatbox"></div>
               <form>
                 <h3>Message:<input></input><button className="messageToggleButton">send</button></h3>
               </form>
               
            </div>
         </div>
      </div>
   )
}

export default Chat
