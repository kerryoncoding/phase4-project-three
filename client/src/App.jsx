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
   const [postList, setPostList] = useState([])
   const [selectedPost, setSelectedPost] = useState([])
   const URL = "/api/squads"


// Gets all of the squads info -> squadList
   useEffect(() => {
      fetch(URL)
      .then(res => res.json())
      .then(data => setSquadList(data))
   }, [])

// Gets all of the posts info -> PostList
   useEffect(() => {
      fetch("/api/posts")
      .then(res => res.json())
      .then(data => setPostList(data))
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

   // GET feed info for 1 squad...
   // This gets called when I click card message
   function showFeedItem(item) {
      alert('should show one squads')
      // alert('item ' + item.name)
      let tempsquad = [...squadList]
      let onesquad = tempsquad.filter((data) => data.id == item.id)
      // same for posts related to that squad
      setSelectedSquad(onesquad)
      let temppost = [...postList]
      let onepost = temppost.filter((data) => data.squad_id == item.id)
      setSelectedPost(onepost)
   }


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
           <Route path="squads" element={<Squads squadList={squadList} deleteItem={deleteItem} showFeedItem={showFeedItem} selectedSquad={selectedSquad} selectedPost={selectedPost} />} />
        <Route path="create" element={<Create addSquad={addSquad} />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
