
import React, { useState} from "react"
import SquadItem from "./SquadItem"
import PostFeedItem from "./PostFeedItem"


function Squads({ displayedSquads, item, toggleView, displayedPosts, toggleFeed, deleteItem }) {
   
   // const [showFeed, setShowFeed] = useState(false)

   // function toggleFeed() {
   //    setShowFeed(!showFeed)
   // }
 
   
   // function handleLogout() {
   //    logOut()
   // }


   const squads = displayedSquads.map((item) => {
      return (
         <SquadItem 
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            // showFeedCard={showFeedCard}
            // showPostFeed={showPostFeed}
            toggleFeed={toggleFeed}
            toggleView={toggleView}
         />
      )
   })

   const myPost = displayedPosts.map((item) => {
      return (
         <PostFeedItem
            item = { item }
            key = { item.id }
            body={item.body}
         />
      )
   })


   return (
      <>
         {/* <div className="logout">
            <button className="messageToggleButton" onClick={handleLogout}>Logout</button>
         </div> */}
         <div className="squad-container">
            <br />
            <div className="card-container">
               <h2>PodSquads:</h2>
               <br />
               {squads}
               <hr className="breakline" />
               {myPost}
               {/* {(showFeed) ? <FeedView makePosting={makePosting} user={user} toggleFeed={toggleFeed} selectedSquad={selectedSquad} selectedPost={selectedPost} /> : <Squadlist toggleFeed={toggleFeed} deleteItem={deleteItem} showFeedCard={showFeedCard} showPostFeed={showPostFeed} squadList={squadList} />} */}
            </div>
         </div>  
      </>   
   )
}


export default Squads;