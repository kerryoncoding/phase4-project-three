
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function FeedNewMessage({ makePosting, member, leaveSquad, joinSquad }) {

   const [body, setBody] = useState("");
   
   function handleSubmit(e) {
      e.preventDefault();
      makePosting(body)
      setBody("");
   }

   function handleLeaveClick() {
      leaveSquad()
   }
   
   function handleJoinClick() {
      joinSquad()
   }


   if (member) {
      return (
         <>
         <form className="new-message" onSubmit={handleSubmit}>
            <input
               type="text"
               name="body"
               value={body}
               onChange={(e) => setBody(e.target.value)}
               placeholder="   new message..."
            />
            <button className="messageToggleButton" type="submit">Send</button>
         </form>
         <button onClick={handleLeaveClick} className="messageToggleButton" type="submit">Leave this Squad</button>
         </>
      );
   } else {
      return (
         <>
            <br />
            <button onClick={handleJoinClick} className="messageToggleButton" type="submit">Join this Squad</button>
         </>
      )
   }
}

export default FeedNewMessage;



// BACKUP ##################################################################################

// import React, { useState } from "react";
// import { useFormik } from "formik";
// import * as yup from "yup";

// function FeedNewMessage({ makePosting, member, leaveSquad, joinSquad }) {

//    const [body, setBody] = useState("");
   
//    function handleSubmit(e) {
//       e.preventDefault();
//       makePosting(body)
//       setBody("");
//    }

//    function handleLeaveClick() {
//       leaveSquad()
//    }
   
//    function handleJoinClick() {
//       joinSquad()
//    }


//    if (member) {
//       return (
//          <>
//          <form className="new-message" onSubmit={handleSubmit}>
//             <input
//                type="text"
//                name="body"
//                value={body}
//                onChange={(e) => setBody(e.target.value)}
//                placeholder="   new message..."
//             />
//             <button className="messageToggleButton" type="submit">Send</button>
//          </form>
//          <button onClick={handleLeaveClick} className="messageToggleButton" type="submit">Leave this Squad</button>
//          </>
//       );
//    } else {
//       return (
//          <>
//             <br />
//             <button onClick={handleJoinClick} className="messageToggleButton" type="submit">Join this Squad</button>
//          </>
//       )
//    }
// }

// export default FeedNewMessage;