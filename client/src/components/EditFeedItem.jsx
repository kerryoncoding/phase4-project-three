import React, { useState } from "react";

function EditFeedItem({ item, body, editPost, handleEditPost }) {
  const [messageBody, setMessageBody] = useState(body);

  function handleFormSubmit(e) {
     e.preventDefault();
   //   alert(item.id)
   //   alert(item.body)
     editPost(item.id, messageBody)
     setMessageBody("")
     handleEditPost()
  }

   return (
      <>
         <p><strong>{item.user.username}: </strong>{item.body} </p>
    <form className="new-message" onSubmit={handleFormSubmit}>
      <input
         type="text"
         name="body"
         autoComplete="off"
         value={messageBody}
         placeholder="   update message..."
         onChange={(e) => setMessageBody(e.target.value)}
      />
      <input type="submit" className="messageToggleButton" value="Update" />
    </form>
      </>
  );
}

export default EditFeedItem;
