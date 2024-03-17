
import React from "react"
import SquadFeedItem from "./SquadFeedItem"


function SquadFeed({ selectedSquad, toggleFeed}) {
   
   const mySquad = selectedSquad.map((item) => {
      
      return (
         <SquadFeedItem 
            item={item}
            key={item.id}
            toggleFeed={toggleFeed}
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
      <div className="home-container">
         {mySquad}
         <br />
         {/* <button>DELETE SQUAD --- if owner</button> */}
         <hr className="breakline" />
         <h1>...squad FEED here...</h1>
         
         {/* {SquadFeedPost} */}

      </div>
   )
}

export default SquadFeed
      