
import React, { useState } from "react";

function NewMessage({ makePosting }) {
  const [body, setBody] = useState("");

   function handleSubmit(e) {
      e.preventDefault();
      makePosting(body)
      setBody("");
      

   //  fetch("http://127.0.0.1:5555/posts", {
   //    method: "POST",
   //    headers: {
   //      "Content-Type": "application/json",
   //    },
   //    body: JSON.stringify({
        
   //      body: body,
   //    }),
   //  })
   //    .then((r) => r.json())
   //    .then((newMessage) => {
   //      onAddMessage(newMessage);
   //      setBody("");
   //    });
  }

   return (
      <form className="new-message" onSubmit={handleSubmit}>
         <input
         type="text"
         name="body"
         value={body}
         onChange={(e) => setBody(e.target.value)}
         />
         <button className="messageToggleButton" type="submit">Send</button>
      </form>
   );
}

export default NewMessage;