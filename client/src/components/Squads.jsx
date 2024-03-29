
import React, { useState} from "react"
import SquadItem from "./SquadItem"
import PostFeedItem from "./PostFeedItem"
import FeedNewMessage from "./FeedNewMessage"


function Squads({ user, makePosting, active, logOut, squadList, displayedSquads, toggleView, displayedPosts, deleteCard, deletePost, editPost }) {
     
   function handleLogout() {
      logOut()
   }

   const squads = displayedSquads.map((item) => {
      return (
         <SquadItem 
            item={item}
            key={item.id}
            toggleView={toggleView}
            active={active}
            deleteCard={deleteCard}
         />
      )
   })

   const myPost = displayedPosts.map((item) => {
      return (
         <PostFeedItem
            item = { item }
            key = { item.id }
            body = {item.body}
            user={user}
            deletePost={deletePost}
            editPost={editPost}
         />
      )
   })


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
               {squads}
               <hr className="breakline" />
               {myPost}
               {(active) ? "" : <hr className="breakline" /> }
               {(active) ? "" : <h2>{user.username}, join the conversation...</h2>}
               {(active) ? "" : <FeedNewMessage makePosting = {makePosting} />}
            </div>
         </div>  
      </>   
   )
}


export default Squads;