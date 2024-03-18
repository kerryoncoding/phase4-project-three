
import React from "react"
import CreateForm from "./CreateForm"




function Create({addSquad}){
   return (
      <div className="about-container">
         <div className="card-container">
            <CreateForm addSquad={addSquad} />
         </div>
      </div>
      
   )
}

export default Create;