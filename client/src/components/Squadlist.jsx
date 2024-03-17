import React, {useState} from "react"
import SquadFeed from "./SquadFeed"
import SquadItem from "./SquadItem"


function Squadlist({ showAllSquads, squadList, deleteItem, showFeedItem, toggleFeed, selectedSquad }) {

   const [showFeed, setShowFeed] = useState(false)
   // const [buttonText, setButtonText] = useState("Show")

   function toggleFeed(item) {
      // showFeedItem(item)
      setShowFeed(!showFeed)
   }
  
   const allSquads = squadList.map((item) => {
      
      return (
         <SquadItem 
            item={item}
            key={item.id}
            deleteItem={deleteItem}
            showFeedItem={showFeedItem}
            toggleFeed={toggleFeed}
         />
      )
   })

   return (
      <div className="card-container">
         
         {(showFeed) ? <SquadFeed toggleFeed={toggleFeed}  showAllSquads={showAllSquads}  selectedSquad={selectedSquad} deleteItem={deleteItem} /> : allSquads}
      </div>
   )
}


export default Squadlist;