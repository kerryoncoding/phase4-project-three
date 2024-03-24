import React from "react"


function PostFeedItem({ item, user  }) {

	// function handleDeleteClick() {
	// 	deleteItem(item.id)
	// }

	// function handleHidePostsClick(item) {
	// 	toggleFeed(item)
   // }
   
   
   if (item.user.username == user.username) {
      return (
         <div>
            {/* <button className="cardDeleteButton" onClick={handleDeleteClick}>X</button> */}
            {/* <h4>{item.user_id}: </h4> */}
            <p><strong>{item.user.username}: </strong>{item.body} <button className="messageToggleButton">✏️</button> <button className="messageToggleButton">❌</button></p>
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
