import React from "react"


function SquadItem({ item, deleteItem }) {
	function handleDeleteClick() {
		deleteItem(item.id)
	}

	function handleEnterCardClick() {
		alert(' I was clicked')
	}

	return (
		<div className="card" >
			<button className="cardDeleteButton" onClick={handleDeleteClick}>X</button>
			<h2>{item.name}</h2>
			<img src={item.image} className="card-image" alt={item.name}></img>
			<p>{item.description}</p>
			<button classname = "cardEnterButton" onClick={handleEnterCardClick}>ENTER</button>
		</div>
	)
}

export default SquadItem;
