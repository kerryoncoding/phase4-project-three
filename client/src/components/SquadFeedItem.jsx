import React from "react"


function SquadFeedItem({ item, toggleFeed  }) {

	// function handleDeleteClick() {
	// 	deleteItem(item.id)
	// }

	function handleLeaveCardClick() {
		toggleFeed(item)
	}

	return (
		<div className="card" >
			{/* <button className="cardDeleteButton" onClick={handleDeleteClick}>X</button> */}
			<h3>{item.name}</h3>
			<img src={item.image} className="card-image" alt={item.name}></img>
         {/* <p>{item.description}</p> */}
         <button onClick={handleLeaveCardClick} className="messageToggleButton">Hide Posts</button>
		</div>
	)
}

export default SquadFeedItem;
