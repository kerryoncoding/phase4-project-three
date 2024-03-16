
import React from "react"
import SquadFeedItem from "./SquadFeedItem"


function SquadFeed({ selectedSquad, deleteItem, buttonText, toggleFeed, hideFeedItem}) {
   
   const mySquad = selectedSquad.map((item) => {
      
      return (
         <SquadFeedItem 
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            buttonText={buttonText}
            toggleFeed={toggleFeed}
            hideFeedItem={hideFeedItem}
            />
      )
   })


   
   return (
      <div className="home-container">
         {mySquad}
         <button>RETURN TO ALL SQUADS</button>
         <button>DELETE SQUAD --- if owner</button>
         <hr className="breakline" />
         <h1>...squad FEED here...</h1>
         {/* <AddMessage /> */}

      </div>
   )
}

export default SquadFeed
      