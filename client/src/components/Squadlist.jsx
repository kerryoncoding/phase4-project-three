import React, {useState} from "react"
import SquadItem from "./SquadItem"


function Squadlist({ squadList, deleteItem, showFeedItem, toggleFeed,}) {

  
   const allSquads = squadList.map((item) => {
      
      return (
         <SquadItem 
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            showFeedItem={showFeedItem}
            toggleFeed={toggleFeed}
         />
      )
   })

   return (
      <div className="card-container">
         {allSquads}
      </div>
   )
}


export default Squadlist;