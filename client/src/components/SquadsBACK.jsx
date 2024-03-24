
import React, { useState} from "react"
import Squadlist from "./Squadlist"
import FeedView from "./FeedView"

function Squads({ toggleFeed, makePosting, logOut, user, squadList, deleteItem, showFeedCard, showPostFeed, selectedSquad, selectedPost }) {
   
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
               {(showFeed) ? <FeedView makePosting={makePosting} user={user} toggleFeed={toggleFeed} selectedSquad={selectedSquad} selectedPost={selectedPost} /> : <Squadlist toggleFeed={toggleFeed} deleteItem={deleteItem} showFeedCard={showFeedCard} showPostFeed={showPostFeed} squadList={squadList} />}
            </div>
         </div>  
      </>   
   )
}


export default Squads;