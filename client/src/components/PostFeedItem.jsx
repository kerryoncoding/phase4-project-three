import React from "react"


function PostFeedItem({ item, user, deletePost, editPost  }) {

	function handleDeletePost() {
      deletePost(item.id)
   }
   
   function handleEditPost() {
      editPost(item.id)
	}


   
   if (item.user.username == user.username) {
      return (
         <div>
            <p><strong>{item.user.username}: </strong>{item.body} <button className="messageToggleButton" onClick={handleEditPost}>✏️</button> <button className="messageToggleButton" onClick={handleDeletePost}>❌</button></p>
            <hr className="breakline" />
         </div>
      )
   } else {
      return (
         <div>
            <p><strong>{item.user.username}: </strong>{item.body} </p>
         <hr className="breakline" />
      </div>
      )
   }
}

export default PostFeedItem;
