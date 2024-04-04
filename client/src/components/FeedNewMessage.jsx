
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function FeedNewMessage({ makePosting, member, leaveSquad, joinSquad }) {


   function handleLeaveClick() {
      leaveSquad()
   }
   
   function handleJoinClick() {
      joinSquad()
   }

   // Formik
   const formSchema = yup.object().shape({
      body: yup.string().required("Field can not be left blank").max(125, "Exceeds max length"),
   });

   const formik = useFormik({
      initialValues: {
        body: "",
      },
      validationSchema: formSchema,
      onSubmit: (values, {resetForm}) => {
         makePosting(values.body)
         resetForm()
      },
   });
   

   
   if (member) {
      return (
         <>
         <form className="new-message" onSubmit={formik.handleSubmit}>
            <input
               type="text"
               name="body"
               onChange={formik.handleChange}
               value={formik.values.body}
               placeholder="   new message..."
               />
               <p style={{ color: "red" }}> {formik.errors.body}</p>
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