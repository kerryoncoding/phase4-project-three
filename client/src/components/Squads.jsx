
import React, { useState, useEffect } from "react"
import Squadlist from "./Squadlist"

function Squads({showAllSquads, squadList, deleteItem, showFeedItem, selectedSquad }) {
 
   return (
      <div className="squad-container">
         <h2>Active Squads channels:</h2>
         <br />
         <div className="card-container">
            <Squadlist showAllSquads={showAllSquads}  squadList={squadList} deleteItem={deleteItem} showFeedItem={showFeedItem} selectedSquad={selectedSquad} />
         </div>
      </div>     
   )
}


export default Squads;