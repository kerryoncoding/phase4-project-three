
import React, { useState} from "react"
import Squadlist from "./Squadlist"
import SquadFeed from "./SquadFeed"

function Squads({ squadList, deleteItem, showFeedItem, selectedSquad, selectedPost }) {
   
   const [showFeed, setShowFeed] = useState(false)

   function toggleFeed() {
      setShowFeed(!showFeed)
   }
 
   return (
      <div className="squad-container">
         <br />
         <div className="card-container">
            <h2>PodSquads:</h2>
            <br />
            {(showFeed) ? <SquadFeed toggleFeed={toggleFeed} selectedSquad={selectedSquad} selectedPost={selectedPost}/> : <Squadlist toggleFeed={toggleFeed} deleteItem={deleteItem} showFeedItem={showFeedItem} squadList={squadList} />}
         </div>
      </div>     
   )
}


export default Squads;