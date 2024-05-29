

import React, { useState, useContext, useEffect } from "react"
import ThemeContext from './ThemeContext'

import HttpCall from "./HttpCall";
import WebSocketCall from "./WebSocketCall";
import { io } from "socket.io-client";


function Chat( {user} ) {
   const { theme } = useContext(ThemeContext);

   const [socketInstance, setSocketInstance] = useState("");
   const [loading, setLoading] = useState(true);
   const [buttonStatus, setButtonStatus] = useState(false);


   const handleClick = () => {
      if (buttonStatus == false) {
         setButtonStatus(true);
      } else {
         setButtonStatus(false);
      }
   };


   useEffect(() => {
      if (buttonStatus == true) {
         const socket = io("localhost:5555/", {
            transports: ["websocket"],
            cors: {
               // origin: "http://localhost:5173/",
               origin: "http://localhost5000/",
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
      <div className={`your-component ${theme}`}>
         <div className="squad-container">
            <br/>
            <div className="card-container">
               <HttpCall />
               <h1>Welcome to Live Chat, {user.username}!</h1>
               <br></br>
               {!buttonStatus ? (
                     <button className="messageToggleButton" onClick={handleClick}>turn chat on</button>
                  ) : (
                     <>
                     <button className="messageToggleButton" onClick={handleClick}>turn chat off</button>
                     {/* <div className="line">
                        {!loading && <WebSocketCall socket={socketInstance} user={user} />}
                     </div> */}
                     </>
                  )}
               <div className="chatbox">
               {!buttonStatus ? (
                     <>
                     </>
                  ) : (
                     <div className="line">
                        {!loading && <WebSocketCall socket={socketInstance} user={user} />}
                     </div>
                     
                  )}
                  
               </div>            
            </div>
         </div>
      </div>
   )
   }
   



//    return (
//       <div className={`your-component ${theme}`}>
//          {/* <h1>React/Flask App + socket.io</h1> */}
//          <div className="line">
//             <HttpCall />
//          </div>
//          {!buttonStatus ? (
//             <button onClick={handleClick}>turn chat on</button>
//          ) : (
//             <>
//                <button onClick={handleClick}>turn chat off</button>
//                <div className="line">
//                   {!loading && <WebSocketCall socket={socketInstance} user={user} />}
//                </div>
//             </>
//          )}
//       </div>
//    );
// }


export default Chat


//    return (
//       <div className={`your-component ${theme}`}>
//          <div className="squad-container">
//             <br/>
//             <div className="card-container">
//                <HttpCall />
//                <h1>Welcome to Live Chat, {user.username}!</h1>
//                <div className="chatbox">
//                   {!buttonStatus ? (
         //    <button onClick={handleClick}>turn chat on</button>
         // ) : (
         //    <>
         //       <button onClick={handleClick}>turn chat off</button>
         //       <div className="line">
         //          {!loading && <WebSocketCall socket={socketInstance} user={user} />}
         //       </div>
         //    </>
         // )}
//                </div>
//                <MyForm />               
//             </div>
//          </div>
//       </div>
//    )
// }

// export default Chat
