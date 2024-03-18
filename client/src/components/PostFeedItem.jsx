import React from "react"


function PostFeedItem({ item  }) {

	// function handleDeleteClick() {
	// 	deleteItem(item.id)
	// }

	// function handleHidePostsClick(item) {
	// 	toggleFeed(item)
	// }

	return (
		<div>
			{/* <button className="cardDeleteButton" onClick={handleDeleteClick}>X</button> */}
         <p> {item.body} -- {item.id} <button className="messageToggleButton">Edit</button> <button className="messageToggleButton">Delete</button></p>
         <hr className="breakline" />
		</div>
	)
}

export default PostFeedItem;
