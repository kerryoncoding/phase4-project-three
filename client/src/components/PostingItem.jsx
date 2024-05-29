import React from "react"

function PostingItem ({ body, squad }) {


	
   return (
      <li>
         <h3>Post: <em>{body} </em> 🎙 PodSquad: <em> {squad} </em> </h3>
         <br/>
      </li>
   )
}

export default PostingItem;
