import React from "react"

function SquadItem({ item, deleteItem, showFeedItem, toggleFeed }) {
	function handleDeleteClick() {
		deleteItem(item.id)
	}

	function handleShowPostsClick() {
		showFeedItem(item)
		toggleFeed(item)
	}

	return (
		<div className="card" >
			<button className="cardDeleteButton" onClick={handleDeleteClick}>❌</button>
			<h3>{item.name}</h3>
			<img src={item.image} className="card-image" alt={item.name}></img>
			<p>{item.description}</p>
			<button onClick={handleShowPostsClick} className="messageToggleButton">Show Posts</button>
		</div>
	)
}

export default SquadItem;
