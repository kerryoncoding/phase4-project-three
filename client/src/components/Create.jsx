
import React from "react"
import CreateForm from "./CreateForm"




function Create({addSquad}){
   return (
      <div className="about-container">
         <h2>CREAT NEW PODSQUAD</h2>
         <p>this should be a form to create a new squad</p>
         <br />
         <div className="card-container">
            <h3>CREATE NEW POD</h3>
            <CreateForm addSquad={addSquad} />
         </div>
      </div>
      
   )
}

export default Create;