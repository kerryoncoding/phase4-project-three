
import React from "react"
import SquadFeedItem from "./SquadFeedItem"
import PostFeedItem from "./PostFeedItem"


function SquadFeed({ selectedSquad, selectedPost, toggleFeed}) {
   
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
         <h1>Posts:</h1>
         <hr className="breakline" />
         
         {myPost}
         {/* {SquadFeedPost} */}
      </div>
   )
}

export default SquadFeed
      