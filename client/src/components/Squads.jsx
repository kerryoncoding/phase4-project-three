
import React, { useState, useEffect } from "react"
import Squadlist from "./Squadlist"

function Squads({squadList, deleteItem, showFeedItem, selectedSquad, hideFeedItem  }) {
 
   return (
      <div className="squad-container">
         <h2>Active Squads channels:</h2>
         <br />
         <div className="card-container">
            <Squadlist squadList={squadList} deleteItem={deleteItem} showFeedItem={showFeedItem} selectedSquad={selectedSquad} hideFeedItem={hideFeedItem} />
         </div>
      </div>     
   )
}


export default Squads;