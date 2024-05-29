import React, {useContext, useState} from "react"
import ThemeContext from './ThemeContext'
import PostingItem from "./PostingItem"

function Button({ getPostsByUser, myPostList }) {

   const { theme } = useContext(ThemeContext);  
   const [showPosts, setShowPosts] = useState(false);

   function handleGetPosts() {
      getPostsByUser()
      setShowPosts(!showPosts)
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

   if (showPosts == true) {
      return (
         <div className={`your-component ${theme}`}>
            <div className="squad-container">
               <br />
               <div className="card-container">
                  <h1>My posts</h1>
                  <br></br>
                  <div>
                     <button className="messageToggleButton" onClick={handleGetPosts}>Hide my posts</button>
                     <div className="chatbox">
                        <br></br>
                        <ul>
                           {postings}
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   } else {
      return (
         <div className={`your-component ${theme}`}>
            <div className="squad-container">
               <br />
               <div className="card-container">
                  <h1>My posts</h1>
                  <br></br>
                  <div>
                     <button className="messageToggleButton" onClick={handleGetPosts}>Show my posts</button>
                     <div className="chatbox">
                        <br></br>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Button
      