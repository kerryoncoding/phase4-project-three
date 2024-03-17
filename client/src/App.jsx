// import * as React from "react";
import React, { useState, useEffect } from "react"
import { createRoot } from "react-dom/client";

import {
   BrowserRouter,
   Routes,
   Route,
   Link,
   Outlet,
} from "react-router-dom";

import Home from "./components/Home"
import Squads from "./components/Squads"
import Create from "./components/Create"
import Login from "./components/Login"

import "./App.css"


function App() {
   const [squadList, setSquadList] = useState([])
   const [selectedSquad, setSelectedSquad] = useState([])
   const URL = "/api/squads"


// Gets all of the squads info -> squadList
   useEffect(() => {
      fetch(URL)
      .then(res => res.json())
      .then(data => setSquadList(data))
   }, [])


// Add a squad to squadlist
   function addSquad(newSquad) {
      fetch((URL), {
         method: "POST",
         headers: {
            "Content-Type":"application/json"
         },
         body: JSON.stringify(newSquad)
      })
      .then(res => res.json())
      .then(data => {
         setSquadList([...squadList, data])
      })
   }


// Remove a Squad from the list 
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

   
   function showAllSquads() {
      alert('should show all squads')
      setSquadList(squadList)
   }


   // GET feed info for 1 squad...
   
   // This gets called when I click card message
   function showFeedItem(item) {
      alert('should show one squads')
      // alert('item ' + item.name)
      let tempsquad = [...squadList]
      let onesquad = tempsquad.filter((data) => data.id == item.id)
      setSelectedSquad(onesquad)
   }

// Don't think this is doing anything right now....
   function hideFeedItem() {
      alert('hide item ')
      setSquadList(updatedList)
   }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
           <Route path="squads" element={<Squads showAllSquads={showAllSquads}  squadList={squadList} deleteItem={deleteItem} showFeedItem={showFeedItem} selectedSquad={selectedSquad} hideFeedItem={hideFeedItem} />} />
        <Route path="create" element={<Create addSquad={addSquad} />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
