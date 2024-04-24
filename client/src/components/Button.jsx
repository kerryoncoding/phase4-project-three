import React from "react"

function Button({ getPostsByUser }) {

   function handleGetPosts() {
      getPostsByUser()
   }
   

   return (
      <>
         <h1>See all of my posts</h1>
         <div>
            <button className="messageToggleButton" onClick={handleGetPosts}>all post</button>
         </div>
      </>
   )
}

export default Button
      