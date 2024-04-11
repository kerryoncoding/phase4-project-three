import React from "react"


function SquadFeedItem({ item, toggleFeed }) {

	function handleHidePostsClick(item) {
		toggleFeed(item)
	}

	return (
		<div className="card" >
			<h3>{item.name}</h3>
			<img src={item.image} className="card-image" alt={item.name}></img>
         <p>{item.description}</p>
         <button onClick={handleHidePostsClick} className="messageToggleButton">Hide Posts</button>
		</div>
	)
}

export default SquadFeedItem;
