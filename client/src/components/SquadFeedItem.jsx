import React from "react"


function SquadFeedItem({ item, deleteItem }) {

	function handleDeleteClick() {
		deleteItem(item.id)
	}

	// function handleCardClick() {
	// 	// showFeedItem(item)
	// 	toggleFeed(item)
	// }

	return (
		<div className="card" >
			<button className="cardDeleteButton" onClick={handleDeleteClick}>X</button>
			<h3>{item.name}</h3>
			<img src={item.image} className="card-image" alt={item.name}></img>
			<p>{item.description}</p>
		</div>
	)
}

export default SquadFeedItem;
