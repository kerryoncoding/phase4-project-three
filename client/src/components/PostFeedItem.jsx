

import React, { useState } from "react"
import EditFeedItem from "./EditFeedItem";


function PostFeedItem({ item, user, deletePost, editPost }) {
   
   const [isEditing, setIsEditing] = useState(false);

   function handleDeletePost() {
      deletePost(item.id)
   }
   
   function handleEditPost() {
      setIsEditing(!isEditing)
      // editPost(item.id)
	}

   
   if (item.user.username == user.username) {
      return (
         < div >
            {isEditing ? (
               <EditFeedItem
                  item={item}
                  editPost={editPost}
                  handleEditPost={handleEditPost}
               />
            ) : (
               <p><strong>{item.user.username}: </strong>{item.body} <button className="messageToggleButton" onClick={handleEditPost}>✏️</button> <button className="messageToggleButton" onClick={handleDeletePost}>❌</button></p>
            )}
            <div>
               {/* <p><strong>{item.user.username}: </strong>{item.body} <button className="messageToggleButton" onClick={handleEditPost}>✏️</button> <button className="messageToggleButton" onClick={handleDeletePost}>❌</button></p> */}
               <hr className="breakline" />
            </div>
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
