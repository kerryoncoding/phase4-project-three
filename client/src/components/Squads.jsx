
import React, { useState, useEffect } from "react"
import Squadlist from "./Squadlist"
import SquadFeed from "./SquadFeed"

function Squads({ squadList, deleteItem, showFeedItem, selectedSquad }) {
   
   const [showFeed, setShowFeed] = useState(false)

   function toggleFeed() {
      // showFeedItem(item)
      setShowFeed(!showFeed)
   }
 
   return (
      <div className="squad-container">
         <h2>Active Squads channels:</h2>
         <br />
         <div className="card-container">
            {(showFeed) ? <SquadFeed toggleFeed={toggleFeed} selectedSquad={selectedSquad} /> : <Squadlist toggleFeed={toggleFeed} deleteItem={deleteItem} showFeedItem={showFeedItem} squadList={squadList} />}
         </div>
      </div>     
   )
}


export default Squads;