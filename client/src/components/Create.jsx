


import React from "react"
import CreateForm from "./CreateForm"


function Create({addSquad, user}){
   return (
      <div className="about-container">
         <div className="card-container">
            <CreateForm addSquad={addSquad} user={user} />
         </div>
      </div>
      
   )
}

export default Create;