

import React, { useState, useContext, useEffect } from "react"
import { socket } from '../socket';
import ThemeContext from './ThemeContext'
import { Events } from "./Events";
import { MyForm } from './MyForm';
import { ConnectionState } from './ConnectionState';
import { ConnectionManager } from './ConnectionManager';


function Chat( {user} ) {

   const { theme } = useContext(ThemeContext);

   const [isConnected, setIsConnected] = useState(socket.connected);
   const [fooEvents, setFooEvents] = useState([]);

   useEffect(() => {
      function onConnect() {
        setIsConnected(true);
      }
  
      function onDisconnect() {
        setIsConnected(false);
      }
  
      function onFooEvent(value) {
        setFooEvents(previous => [...previous, value]);
      }
  
      socket.on('connect', onConnect);
      socket.on('disconnect', onDisconnect);
      socket.on('foo', onFooEvent);
  
      return () => {
        socket.off('connect', onConnect);
        socket.off('disconnect', onDisconnect);
        socket.off('foo', onFooEvent);
      };
    }, []);

   return (
      <div className={`your-component ${theme}`}>
         <div className="squad-container">
            <br/>
            <div className="card-container">
               <ConnectionState isConnected={isConnected} />
               <ConnectionManager />
               <h1>Welcome to Live Chat, {user.username}!</h1>
               {/* <hr className="breakline" /> */}
               {/* <h3>TBD</h3> */}
               <div className="chatbox">
                  chat Line item here....
                  <Events events={fooEvents} />
               </div>
               <MyForm />               
            </div>
         </div>
      </div>
   )
}

export default Chat
