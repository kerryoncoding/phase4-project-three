import React from "react"


function PostFeedItem({ item  }) {

	// function handleDeleteClick() {
	// 	deleteItem(item.id)
	// }

	// function handleHidePostsClick(item) {
	// 	toggleFeed(item)
   // }
   
     return(
        <div>
			{/* <button className="cardDeleteButton" onClick={handleDeleteClick}>X</button> */}
           <h4>{item.user_id}: </h4>
           {/* <h4>{item.user.username}:</h4> */}
         <p> {item.body} <button className="messageToggleButton">Edit ✏️</button> <button className="messageToggleButton">Delete 🗑 </button></p>
         <hr className="breakline" />
      </div>
   )
}

export default PostFeedItem;
