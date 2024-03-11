
import React from "react"

function Squads({squadList}, {deleteItem}) {

   // TRYING TO ELIMINATE SQUADLIST AS IT"S OWN FILE ????
   
   const showSquads = squadList.map((item) => {

      return (
         <SquadItem 
         item = {item}
         key = {item.id}
         deleteItem= {deleteItem} />
      )
   })



   return (
      <div className="about-container">
         <h2>LIST ALL SQADS</h2>
         {showSquads}
      </div>     
   )
}

export default Squads;