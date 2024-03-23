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
   // NEW FOR USER...LOGIN  *******************LOGIN
   const [user, setUser] = useState(null)
   // const [productions, setProductions] = useState([])
   // const history = useHistory()
   // const URL = "/api/squads"


   useEffect(() => {
      fetchSquads()
      fetchPosts()
      fetchUser()
    },[])



   // Gets all of the squads info -> squadList
   const fetchSquads = () =>(
      fetch("/api/squads")
         .then(res => res.json())
         .then(data => setSquadList(data))
   )

   // Gets all of the posts info -> PostList
   const fetchPosts =() => (
      fetch("/api/posts")
         .then(res => res.json())
         .then(data => setPostList(data))
   )


   // ###login - checks authorized user info -> user
   const fetchUser = () => (
      fetch("/api/authorized")
         .then(res => {
            if (res.ok) {
               res.json().then(user => setUser(user))
            } else {
               setUser(null)
            }
         })
   )



// Add a squad to squadlist
   function addSquad(newSquad) {
      fetch(("/api/squads"), {
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
      fetch(`/api/squads/${item}`, {
         method: "DELETE",
      })
      .then(res => res.json())
      .then(data => {
         let updatedList = squadList.filter((data)=> data.id != item)
         setSquadList(updatedList)
      })
   }

   // GET feed info for 1 squad...
   // This gets called when I click card message
   function showFeedItem(item) {
      // alert('item ' + item.name)
      let tempsquad = [...squadList]
      let onesquad = tempsquad.filter((data) => data.id == item.id)
      // same for posts related to that squad
      setSelectedSquad(onesquad)
      let temppost = [...postList]
      let onepost = temppost.filter((data) => data.squad_id == item.id)
      setSelectedPost(onepost)
   }


   // ### using login
   const updateUser = (user) => setUser(user)
   

   // ########## FOR LOGOUT
   function logOut(){
         updateUser(null)
   }

   
   
   if (!user) return (
      <>
         <Login updateUser={updateUser} />
      </>
   )
   return (
      <>
         <Routes>
            <Route path="/" element={<Home user={user} logOut={logOut} updateUser={updateUser} />} />
            <Route path="squads" element={<Squads user={user} updateUser={updateUser} squadList={squadList} deleteItem={deleteItem} showFeedItem={showFeedItem} selectedSquad={selectedSquad} selectedPost={selectedPost} />} />
            <Route path="create" element={<Create addSquad={addSquad} />} />
            {/* <Route path="logout" element={<Logout logOut={logOut} />} /> */}
         </Routes>
      </>
   )


   // return (
   //    <>
   //       <Routes>
   //          <Route path="/" element={<Home />} />
   //          <Route path="squads" element={<Squads squadList={squadList} deleteItem={deleteItem} showFeedItem={showFeedItem} selectedSquad={selectedSquad} selectedPost={selectedPost} />} />
   //          <Route path="create" element={<Create addSquad={addSquad} />} />
   //          <Route path="login" element={<Login updateUser={updateUser}  />} />
   //       </Routes>
   //    </>
   // )

}

export default App
