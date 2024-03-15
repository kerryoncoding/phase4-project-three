
import React, { useState, useEffect } from "react"
import Squadlist from "./Squadlist"

function Squads() {
   const [squadList, setSquadList] = useState([])
   const [selectedSquad, setSelectedSquad] = useState([])
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

   function showFeedItem(item) {
      alert('item ' + item.name)
      let squad = squadList.filter((data)=> data.id == item.id)
         setSelectedSquad(squad)
   }


   return (
      <div className="squad-container">
         <h2>Active Squads channels:</h2>
         <br />
         <div className="card-container">
            <Squadlist squadList={squadList} deleteItem={deleteItem} showFeedItem={showFeedItem} selectedSquad={selectedSquad} />
         </div>
      </div>     
   )
}


export default Squads;