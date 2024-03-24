
import React, { useState } from "react";

function NewMessage({ makePosting }) {
  const [body, setBody] = useState("");

   function handleSubmit(e) {
      e.preventDefault();
      makePosting(body)
      setBody("");
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