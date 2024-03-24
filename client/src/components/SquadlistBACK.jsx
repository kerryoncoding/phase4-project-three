import React from "react"
import SquadItem from "./SquadItem"


function Squadlist({ squadList, deleteItem, showFeedCard, showPostFeed, toggleFeed}) {

  
   const allSquads = squadList.map((item) => {
      
      return (
         <SquadItem 
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            showFeedCard={showFeedCard}
            showPostFeed={showPostFeed}
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