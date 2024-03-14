import React from "react"


function SquadItem({ item, deleteItem, showFeedItem, showOneSquad, toggleFeed, buttonText }) {
	function handleDeleteClick() {
		deleteItem(item.id)
	}

	function handleEnterCardClick() {
		// alert(' I was clicked')
		showFeedItem(item)
		showOneSquad(item)
		toggleFeed(item)
	}

	return (
		<div className="card" >
			<button className="cardDeleteButton" onClick={handleDeleteClick}>X</button>
			<h3>{item.name}</h3>
			<img src={item.image} className="card-image" alt={item.name}></img>
			<p>{item.description}</p>
			<button onClick={handleEnterCardClick} className="messageToggleButton">{buttonText} Messages</button>
		</div>
	)
}

export default SquadItem;
