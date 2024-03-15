
import React from "react"
import SquadFeedItem from "./SquadFeedItem"


function SquadFeed({ selectedSquad, deleteItem }) {
   
   const mySquad = selectedSquad.map((item) => {
      
      return (
         <SquadFeedItem 
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            />
      )
   })


   
   return (
      <div className="home-container">
         {mySquad}
         <hr className="breakline" />
         <h1>...squad FEED here...</h1>
      </div>
   )
}

export default SquadFeed
      