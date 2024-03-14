import React, {useState} from "react"
import SquadFeed from "./SquadFeed"
import SquadItem from "./SquadItem"


function Squadlist({ squadList, deleteItem, showFeedItem, showOneSquad, toggleFeed }) {

   const [showFeed, setShowFeed] = useState(false)
   // const [oneSquad, setOneSquad] = useState([])

   const [buttonText, setButtonText] = useState("Show")

   function toggleFeed(item) {
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
            showOneSquad={showOneSquad}
            toggleFeed={toggleFeed}
            buttonText={buttonText}
         />
      )
   })

   function showOneSquad(item) {
      // setOneSquad(item)
   }
      

   return (
      <div className="card-container">
         
         {(showFeed) ? "" : allSquads}
         {/* {(!showFeed) ? "" : oneSquad } */}
         <hr className="breakline" />
         {/* <button onClick={toggleFeed} className="formToggleButton">{buttonText} Messages</button> */}
         {(showFeed) ? <SquadFeed /> : "" }
         
      </div>
   )
}


export default Squadlist;