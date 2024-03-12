
import React, { useState, useEffect } from "react"
import Squadlist from "./Squadlist"

function Squads() {
   const [squadList, setSquadList] = useState([])
   const URL = "http://localhost:5173/components/squadlist"

   useEffect(()=>{
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
      <div className="about-container">
         <h2>LIST ALL SQADS</h2>
         <div className="card-container">
            <Squadlist squadList={squadList} deleteItem={deleteItem} />
         </div>
      </div>     
   )
}


export default Squads;