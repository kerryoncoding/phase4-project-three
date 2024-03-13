import React, {useState} from "react"
// import SquadForm from "./SquadForm"
import SquadItem from "./SquadItem"


function Squadlist({squadList, deleteItem}){

   // const [showForm, setShowForm] = useState(false)

   // const [buttonText, setButtonText] = useState("Show")

   // function toggleForm() {
   //    setShowForm(!showForm)
   //    {(showForm) ? setButtonText("Show") : setButtonText("Hide")}
   // }


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
         {showSquads}
         {/* <hr className="breakline" /> */}
         {/* <button onClick={toggleForm} className="formToggleButton">{buttonText} Form</button>
         {(showForm) ? <SquadForm addSquad={addSquad} /> : "" } */}
         <h3>Don't see what you are looking for?  Create your own!</h3>
      </div>
   )
}


export default Squadlist;