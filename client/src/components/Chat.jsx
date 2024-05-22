

import React, { useState, useContext, useEffect } from "react"
import ThemeContext from './ThemeContext'

import HttpCall from "./HttpCall";
import WebSocketCall from "./WebSocketCall";
import { io } from "socket.io-client";

// import { socket } from '../socket';
// import { Events } from "./Events";
// import { MyForm } from './MyForm';
// import { ConnectionState } from './ConnectionState';
// import { ConnectionManager } from './ConnectionManager';


function Chat( {user} ) {

   const { theme } = useContext(ThemeContext);

   const [socketInstance, setSocketInstance] = useState("");
  const [loading, setLoading] = useState(true);
  const [buttonStatus, setButtonStatus] = useState(false);

  const handleClick = () => {
    if (buttonStatus === false) {
      setButtonStatus(true);
    } else {
      setButtonStatus(false);
    }
  };

  useEffect(() => {
    if (buttonStatus === true) {
      const socket = io("localhost:5555/", {
        transports: ["websocket"],
        cors: {
          origin: "http://localhost:3000/",
        },
      });

      setSocketInstance(socket);

      socket.on("connect", (data) => {
        console.log(data);
      });

      setLoading(false);

      socket.on("disconnect", (data) => {
        console.log(data);
      });

      return function cleanup() {
        socket.disconnect();
      };
    }
  }, [buttonStatus]);
   
  return (
   <div className="App">
     <h1>React/Flask App + socket.io</h1>
     <div className="line">
       <HttpCall />
     </div>
     {!buttonStatus ? (
       <button onClick={handleClick}>turn chat on</button>
     ) : (
       <>
         <button onClick={handleClick}>turn chat off</button>
         <div className="line">
           {!loading && <WebSocketCall socket={socketInstance} />}
         </div>
       </>
     )}
   </div>
 );
}


   
   
   
   

   // const [isConnected, setIsConnected] = useState(socket.connected);
   // const [fooEvents, setFooEvents] = useState([]);

   // useEffect(() => {
   //    function onConnect() {
   //      setIsConnected(true);
   //    }
  
   //    function onDisconnect() {
   //      setIsConnected(false);
   //    }
  
   //    function onFooEvent(value) {
   //      setFooEvents(previous => [...previous, value]);
   //    }
  
   //    socket.on('connect', onConnect);
   //    socket.on('disconnect', onDisconnect);
   //    socket.on('foo', onFooEvent);
  
   //    return () => {
   //      socket.off('connect', onConnect);
   //      socket.off('disconnect', onDisconnect);
   //      socket.off('foo', onFooEvent);
   //    };
   //  }, []);

//    return (
//       <div className={`your-component ${theme}`}>
//          <div className="squad-container">
//             <br/>
//             <div className="card-container">
//                <ConnectionState isConnected={isConnected} />
//                <ConnectionManager />
//                <h1>Welcome to Live Chat, {user.username}!</h1>
//                <div className="chatbox">
//                   chat Line item here....
//                   <Events events={fooEvents} />
//                </div>
//                <MyForm />               
//             </div>
//          </div>
//       </div>
//    )
// }

export default Chat
