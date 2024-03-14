import React from "react"


function SquadItem({ item, deleteItem, showFeedItem, showOneSquad, toggleFeed, buttonText }) {
	function handleDeleteClick() {
		deleteItem(item.id)
	}

	function handleEnterCardClick() {
		// alert(' I was clicked')
		showFeedItem(item)
		showOneSquad(item)
	}

	return (
		<div className="card" >
			<button className="cardDeleteButton" onClick={handleDeleteClick}>X</button>
			<h2>{item.name}</h2>
			<img src={item.image} className="card-image" alt={item.name}></img>
			<p>{item.description}</p>
			{/* <button className="cardEnterButton" onClick={handleEnterCardClick}>ENTER</button> */}
			<button onClick={toggleFeed} className="formToggleButton">{buttonText} Messages</button>
		</div>
	)
}

export default SquadItem;
