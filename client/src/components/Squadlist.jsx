import React, {useState} from "react"
import SquadFeed from "./SquadFeed"
import SquadItem from "./SquadItem"


function Squadlist({ squadList, deleteItem, showFeedItem, toggleFeed, selectedSquad, hideFeedItem }) {

   const [showFeed, setShowFeed] = useState(false)
   const [buttonText, setButtonText] = useState("Show")

   function toggleFeed(item) {
      // showFeedItem(item)
      setShowFeed(!showFeed)
      { (showFeed) ? setButtonText("Show") : setButtonText("Hide") }
   }
  
   const allSquads = squadList.map((item) => {
      
      return (
         <SquadItem 
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            showFeedItem={showFeedItem}
            toggleFeed={toggleFeed}
            buttonText={buttonText}
         />
      )
   })

   return (
      <div className="card-container">
         
         {/* {allSquads} */}
         {(showFeed) ? ""  : allSquads}
         {/* <button onClick={toggleFeed} className="formToggleButton">{buttonText} Messages</button> */}
         {(showFeed) ? <SquadFeed selectedSquad={selectedSquad} buttonText={buttonText} hideFeedItem={hideFeedItem} /> : "" }
         
      </div>
   )
}


export default Squadlist;