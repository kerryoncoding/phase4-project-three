import React, {useState} from "react"
import SquadFeed from "./SquadFeed"
import SquadItem from "./SquadItem"


function Squadlist({squadList, deleteItem}){

   const [showFeed, setShowFeed] = useState(false)

   const [buttonText, setButtonText] = useState("Show")

   function toggleFeed() {
      setShowFeed(!showFeed)
      { (showFeed) ? setButtonText("Show") : setButtonText("Hide") }
   }

   function toggleSquads() {
      pass
   }


   const showSquads = squadList.map((item) => {

      return (
         <SquadItem 
         item = {item}
         key = {item.id}
         deleteItem= {deleteItem} />
      )
   })


   return (
      <div className="card-container">
         <h2>Active Squads channels:</h2>
         <h3>Don't see what you are looking for?  Create your own!</h3>
         {showSquads}
         <hr className="breakline" />
         <button onClick={toggleFeed} className="formToggleButton">{buttonText} Messages</button>
         {(showFeed) ? <SquadFeed  /> : "" }
         
      </div>
   )
}


export default Squadlist;