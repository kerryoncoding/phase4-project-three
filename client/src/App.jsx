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

   useEffect(() => {
      fetch(URL)
      .then(res => res.json())
      .then(data => setSquadList(data))
   }, [])
   

// Add squad to squadlist
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

   function hideFeedItem() {
      alert('hide item ')
      setSquadList(updatedList)
   }
// new ^^

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="squads" element={<Squads squadList={squadList} deleteItem={deleteItem} showFeedItem={showFeedItem} selectedSquad={selectedSquad} hideFeedItem={hideFeedItem} />} />
        <Route path="create" element={<Create addSquad={addSquad} />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
