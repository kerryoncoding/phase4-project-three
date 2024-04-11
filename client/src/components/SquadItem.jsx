import React from "react"

function SquadItem({ active, item, deleteCard, toggleView }) {

	function handleDeleteClick() {
		deleteCard(item.id)
	}

	function handleShowPostsClick() {
		toggleView(item)
	}

	return (
		<div className="card" >
			<button className="cardDeleteButton" onClick={handleDeleteClick}>✖</button>
			{/* <button className="cardDeleteButton" onClick={handleDeleteClick}>✅</button> */}
			<h3>{item.name}</h3>
			<img src={item.image} className="card-image" alt={item.name}></img>
			<p>{item.description}</p>
			{(active) ? <button onClick={handleShowPostsClick} className="messageToggleButton">Show Posts</button> : <button onClick={handleShowPostsClick} className="messageToggleButton">Hide Posts</button> }
		</div>
	)
}

export default SquadItem;
