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
   const [displayedSquads, setDisplayedSquads] = useState([])
   const [displayedPosts, setDisplayedPosts] = useState([])
   const [active, setActive] = useState(true)


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


   // #### THESE ARE DISPLAYED CARD
   // BY DEFAULT ALL CARDS ARE SHOWN
   // CLICKING A CARD CHANGES ALL CARDS BUT THAT ONE FROM SHOWN/HIDDEN
   // let tempSquads = [...squadList]
   // setDisplayedSquads(tempSquads)
   function toggleView(item) {
      alert(item.id)
      if (active) {
         const oneSquad = displayedSquads.filter((data) => data.id == item.id)
         setDisplayedSquads(oneSquad)
         let tempPosts = [...postList]
         let onePost = tempPosts.filter((data) => data.squad_id == item.id)
         setDisplayedPosts(onePost)
      } else {
         let tempSquads = [...squadList]
         setDisplayedSquads(tempSquads)
         setDisplayedPosts([])
      }
      setActive(!active)
   }


   // #### THESE ARE DISPLAYED POSTS
   // BY DEFAULT ALL POSTS ARE HIDDEN
   // CLICKING A CARD CHANGES ALL POSTS WITH SAME SQUAD_ID FROM SHOW/HIDDEN
   // let tempPosts = [...postList] 
   // setDisplayedPosts(tempPosts)








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
      let newPost = {
         body: body,
         user_id: user.id,
         squad_id: selectedSquad[0].id,
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
            // fetchPosts()
            // * * * * * * * * * * * * * * * * * * * * *
            // setPostList(...postList, data)
            // setSelectedPost(...selectedPost, data)
         });
      showPostFeed(selectedSquad[0].id)
   }

   // Item will be the squad ID
   function showPostFeed(item) {
      alert(item)
      let temppost = [...postList]
      let onepost = temppost.filter((data) => data.squad_id == item)
      setSelectedPost(onepost)
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
            setSquadList([...squadList, data])
         })
   }

   // Remove a Squad from the list 
   function deleteItem(item) {
      fetch(`/api/squads/${item}`, {
         method: "DELETE",
      })
         .then(res => res.json())
         .then(data => {
            let updatedList = squadList.filter((data) => data.id != item)
            setSquadList(updatedList)

         })
   }

   // GET feed info for 1 squad...
   // This gets called when I click show/hide posts on card (Item is full squad Item)
   function showFeedCard(item) {
      // alert('item ' + item.name)
      let tempsquad = [...squadList]
      let onesquad = tempsquad.filter((data) => data.id == item.id)
      setSelectedSquad(onesquad)
   }


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
            {/* <Route path="squads" element={<Squads displayedSquads={displayedSquads} displayedPosts={displayedPosts} makePosting={makePosting} logOut={logOut} user={user} updateUser={updateUser} squadList={squadList} deleteItem={deleteItem} showFeedCard={showFeedCard} showPostFeed={showPostFeed} selectedSquad={selectedSquad} selectedPost={selectedPost} />} /> */}

            <Route path="squads" element={<Squads toggleView={toggleView} displayedSquads={displayedSquads} displayedPosts={displayedPosts} postList={postList} deleteItem={deleteItem} />} />

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
