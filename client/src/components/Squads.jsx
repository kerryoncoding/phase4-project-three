
import React, { useState, useEffect } from "react"
import Squadlist from "./Squadlist"
import SquadItem from "./SquadItem"

function Squads() {
   const [squadList, setSquadList] = useState([])
   const URL = "/api/squads"

   useEffect(() => {
      fetch(URL)
      .then(res => res.json())
      .then(data => setSquadList(data))
   },[])

   
   function deleteItem(item){
      fetch(`${URL}/${item}`, {
         method: "DELETE",
      })
      .then(res => res.json())
      .then(data=> {
         let updatedList = squadList.filter((data)=> data.id != item)
         setSquadList(updatedList)
      })
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
      <div className="squad-container">
         <br />
         <div className="card-container">
            <Squadlist squadList={squadList} deleteItem={deleteItem} />
         </div>
      </div>     
   )
}


export default Squads;