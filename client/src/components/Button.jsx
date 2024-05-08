import React from "react"
import PostingItem from "./PostingItem"

function Button({ getPostsByUser, myPostList }) {

   function handleGetPosts() {
      getPostsByUser()
   }
   
   const postings = myPostList.map((item) => {
      return (
         <PostingItem
            key={item.id}
            body = {item.body}
            squad= {item.squad.name}         
         />
      )
   })

   return (
      <>
         <h1>See all of my posts</h1>
         <div>
            <button className="messageToggleButton" onClick={handleGetPosts}>all post</button>
            <ul>
               {postings}
            </ul>
         </div>
      </>
   )
}

export default Button
      