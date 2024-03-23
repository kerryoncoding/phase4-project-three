
import React, { useState} from "react"
import Squadlist from "./Squadlist"
import Login from "./Login"
import FeedView from "./FeedView"

function Squads({ logOut, user, squadList, deleteItem, showFeedItem, selectedSquad, selectedPost }) {
   
   const [showFeed, setShowFeed] = useState(false)

   function toggleFeed() {
      setShowFeed(!showFeed)
   }
 
   
   function handleLogout() {
      logOut()
   }

   return (
      <>
         <div className="logout">
            <button className="messageToggleButton" onClick={handleLogout}>Logout</button>
         </div>
         <div className="squad-container">
            <br />
            <div className="card-container">
            <h2>PodSquads:</h2>
            <br />
               {(showFeed) ? <FeedView user={user} toggleFeed={toggleFeed} selectedSquad={selectedSquad} selectedPost={selectedPost}/> : <Squadlist toggleFeed={toggleFeed} deleteItem={deleteItem} showFeedItem={showFeedItem} squadList={squadList} />}
            </div>
         </div>  
      </>   
   )
}


export default Squads;