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
   const [postList, setPostList] = useState([])
   const [displayedSquads, setDisplayedSquads] = useState([])
   const [displayedPosts, setDisplayedPosts] = useState([])
   const [active, setActive] = useState(true)
   const [squadNumber, setSquadNumber] = useState(0)


   // NEW FOR USER...LOGIN  *******************LOGIN
   const [user, setUser] = useState(null)


   useEffect(() => {
      fetchSquads()
      fetchPosts()
      fetchUser()
   }, [])

   // Gets all of the squads info -> squadList
   const fetchSquads = () => (
      fetch("/api/squads")
         .then(res => res.json())
         .then(data => {
            setSquadList(data)
            let tempSquads = [...squadList]
            setDisplayedSquads(tempSquads)
         })
   )

   // Gets all of the posts info -> PostList
   const fetchPosts = () => (
      fetch("/api/posts")
         .then(res => res.json())
         .then(data => {
            setPostList(data)
         })
   )


   // #### THESE ARE DISPLAYED CARDS/POSTS
   // BY DEFAULT ALL CARDS ARE SHOWN, ALL POSTS ARE HIDDEN
   // CLICKING A CARD CHANGES ALL CARDS BUT THAT ONE FROM SHOWN/HIDDEN
   // CLICKING A CARD CHANGES ALL POSTS WITH SAME SQUAD_ID FROM SHOW/HIDDEN
   function toggleView(item) {
      if (active) {
         setSquadNumber(item.id)
         const oneSquad = displayedSquads.filter((data) => data.id == item.id)
         setDisplayedSquads(oneSquad)
         let tempPosts = [...postList]
         let onePost = tempPosts.filter((data) => data.squad_id == item.id)
         setDisplayedPosts(onePost)
      } else {
         let tempSquads = [...squadList]
         setDisplayedSquads(tempSquads)
         setDisplayedPosts([])
         setSquadNumber(0)
      }
      setActive(!active)
   }




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

   // ####logout --- would this prevent refresh loging back in?
   // const clearUser = () => {
   //    fetch('/api/authorized', { method: "DELETE" })
   //       .then(res => {
   //          if (res.ok) {
   //             updateUser(null)
   //          }
   //       })
   // }

   // Add a post to posts


   function makePosting(body) {
      alert(body)
      let newPost = {
         body: body,
         user_id: user.id,
         squad_id: squadNumber,
      }
      fetch("/api/posts", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newPost),
      })
         .then((r) => r.json())
         .then((data) => {
            fetchPosts()
            setDisplayedPosts([...displayedPosts, data])
         });
   }


   // Add a squad to squadlist
   function addSquad(newSquad) {
      fetch(("/api/squads"), {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(newSquad)
      })
         .then(res => res.json())
         .then(data => {
            setDisplayedSquads([...squadList, data])
         })
   }

   // Remove a Squad from the list 
   function deleteCard(item) {
      fetch(`/api/squads/${item}`, {
         method: "DELETE",
      })
         .then(res => res.json())
         .then(data => {
            let updatedList = squadList.filter((data) => data.id != item)
            setDisplayedSquads(updatedList)

         })
   }

   function editPost(item) {
      alert(item)
   }


   // Doesn't actively update
   function deletePost(item) {
     alert(item)
      fetch('/api/post/${item}', {
         methon: "DELETE",
      })
         .then(res => res.json())
         .then(data => {
            let updatedList = displayedPosts.filter((date) => data.id != item)
            setDisplayedPosts(updatedList)
         })
   }

   // GET feed info for 1 squad...
   // This gets called when I click show/hide posts on card (Item is full squad Item)
   // function showFeedCard(item) {
   //    // alert('item ' + item.name)
   //    let tempsquad = [...squadList]
   //    let onesquad = tempsquad.filter((data) => data.id == item.id)
   //    setSelectedSquad(onesquad)
   // }


   //   function toggleFeed() {
   //    setShowFeed(!showFeed)
   // }


   // function setCurrentPosts(data) {
   //    let temppost = [...postList]
   //    let onepost = temppost.filter((data) => data.squad_id == item.id)
   //    setSelectedPost(onepost)
   // }


   // ### using login
   const updateUser = (user) => setUser(user)


   // ########## FOR LOGOUT
   function logOut() {
      // const clearUser = () => (
      //    fetch('/api/authorized, {method: "DELETE"}')

      // )
      setUser(null)
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


            <Route path="squads" element={<Squads user={user} makePosting={makePosting} logOut={logOut} toggleView={toggleView} displayedSquads={displayedSquads} displayedPosts={displayedPosts} deleteCard={deleteCard} active={active} deletePost={deletePost} editPost={editPost} />} />

            <Route path="create" element={<Create addSquad={addSquad} />} />
            {/* <Route path="logout" element={<Logout logOut={logOut} />} /> */}
         </Routes>
      </>
   )


}

export default App
