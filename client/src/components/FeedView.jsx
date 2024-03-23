
import React from "react"
import SquadFeedItem from "./SquadFeedItem"
import FeedNewMessage from "./FeedNewMessage"
import PostFeedItem from "./PostFeedItem"


function FeedView({ makePosting, user, selectedSquad, selectedPost, toggleFeed}) {
   
   const mySquad = selectedSquad.map((item) => {
      return (
         <SquadFeedItem 
            item={item}
            key={item.id}
            toggleFeed={toggleFeed}
            />
      )
   })

   const myPost = selectedPost.map((item) => {
      return (
         <PostFeedItem
         item = { item }
         key = { item.id }
         body={item.body}
         />
         
      )
   })

   // const myPosts = selectedPost.map((item) => {
      
   //    return (
   //       <SquadFeedPost
   //          item={item}
   //          key={item.id}
   //          body={body}
   //          user_id={user_id}
   //          />
   //    )
   // })


     
   return (
      <div className="card-container">
         {mySquad}
         <br />
         {/* <button>DELETE SQUAD --- if owner</button> */}
         <br/>
         <h1>Posts:</h1>
         <hr className="breakline" />
         {myPost}
         {/* {SquadFeedPost} */}
         <hr className="breakline" />
         <h2>{user.username}, join the conversation...</h2>
         <FeedNewMessage makePosting = {makePosting} />
      </div>
   )
}

export default FeedView
      