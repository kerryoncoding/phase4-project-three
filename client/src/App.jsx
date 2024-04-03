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
   const [squadUserList, setSquadUserList] = useState([])
   const [postList, setPostList] = useState([])
   const [displayedSquads, setDisplayedSquads] = useState([])
   const [displayedPosts, setDisplayedPosts] = useState([])
   const [active, setActive] = useState(true)
   const [member, setMember] = useState([])
   const [squadNumber, setSquadNumber] = useState(0)
   const [user, setUser] = useState(null)
 


   useEffect(() => {
      fetchUser()
      fetchPosts()
      fetchSquads()
      fetchSquadUsers()
   }, [])

   // SQUADS: Gets all of the squads info -> squadList
   const fetchSquads = () => (
      fetch("/api/squads")
         .then(res => res.json())
         .then(data => {
            setSquadList(data)
         })
   )

   // POSTS: Gets all of the posts info -> PostList
   const fetchPosts = () => (
      fetch("/api/posts")
         .then(res => res.json())
         .then(data => {
            setPostList(data)
         })
   )


   // SQUADUSERS: Gets all squadusers -> squadUserList
   const fetchSquadUsers = () => (
      fetch("/api/squadusers")
         .then(res => res.json())
         .then(data => {
            setSquadUserList(data)
         })
   )


   // EVERYTHING HERE:
   // SQUADS / POSTS
   // BY DEFAULT ALL SQUAD CARDS ARE SHOWN, ALL POSTS ARE HIDDEN
   // CLICKING A CARD CHANGES ALL CARDS BUT THAT ONE FROM SHOWN/HIDDEN
   // CLICKING A CARD CHANGES ALL POSTS WITH SAME SQUAD_ID FROM SHOWN/HIDDEN
   function toggleView(item) {
      if (active) {
         setSquadNumber(item.id)
         const oneSquad = displayedSquads.filter((data) => data.id == item.id)
         setDisplayedSquads(oneSquad)
         let tempPosts = [...postList]
         let onePost = tempPosts.filter((data) => data.squad_id == item.id)
         setDisplayedPosts(onePost)
         checkMemberStatus(item)
      } else {
         let tempSquads = [...squadList]
         setDisplayedSquads(tempSquads)
         setDisplayedPosts([])
         setSquadNumber(0)
         // let tempsquaduser = [...squadUserList]
      }
      setActive(!active)
   }

   function checkMemberStatus(item) {
      // alert(item.id)
      // alert(user.id)
      let tempStatus = squadUserList.filter((data) => ((data.squad_id == item.id) && (data.user_id == user.id)))
      if (tempStatus.length == 0) {
         // alert("none")
         setMember(false)
      } else {
         // alert(tempStatus[0].membership)
         setMember(tempStatus[0].membership)
      }
   }



   // ###login - checks authorized user info -> user
   const fetchUser = () => {
      fetch("/api/authorized")
         .then(res => {
            if (res.ok) {
               res.json().then(user => setUser(user))
               setActive(true)
            } else {
               setUser(null)
               setActive(true)
            }
         })
   }

   function makePosting(item) {
      let newPost = {
         body: item,
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


   // SQUADS: Add a new squad to "squads" table
   function addSquad(res) {
      alert("here")
      alert(res)
      let updatedList = ([...squadList, res])
      setDisplayedSquads(updatedList)
      setSquadList(updatedList)
   

   //    fetch(("/api/squads"), {
   //       method: "POST",
   //       headers: {
   //          "Content-Type": "application/json"
   //       },
   //       body: JSON.stringify(newSquad)
   //    })
   //       .then(res => res.json())
   //       .then(data => {
   //          let updatedList = ([...squadList, data])
            
   //          setDisplayedSquads(updatedList)
   //          setSquadList(updatedList)
   //       })


   }

   // SQUADS: Remove clicked Squad from "squads" table
   function deleteCard(item) {
      fetch(`/api/squads/${item}`, {
         method: "DELETE",
      })
         .then(res => res.json())
         .then(data => {
            let updatedList = squadList.filter((data) => data.id != item)
            setDisplayedSquads(updatedList)
            setSquadList(updatedList)
         })
   }


   function editPost(item, messageBody ) {
      let updatedPost = {
         body: messageBody,
         user_id: user.id,
         squad_id: squadNumber,
      }
         
      fetch(`/api/posts/${item}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedPost),
          })
         .then((r) => r.json())
         .then((data) => {
            fetchPosts()
            let updatedPosts = displayedPosts.map((post) => (item == post.id) ? data : post)
            setDisplayedPosts(updatedPosts)
            // setDisplayedPosts([...displayedPosts, data])
      });
   }


 
   // POSTS - Removes selected post Item from "posts" table
   function deletePost(item) {
   //   alert(item)
     fetch(`/api/posts/${item}`, {
      method: "DELETE",
   })
         .then(res => res.json())
         .then(data => {
            let updatedList = displayedPosts.filter((data) => data.id != item)
            setDisplayedPosts(updatedList)
         })
   }

   // SQUADUSER: add squad to squadUser
   function joinSquad() {
      // alert(squadNumber)
      // alert(user.id)
      let new_member = {
         squad_id:squadNumber,
         user_id: user.id,
         membership: true
      }
      updateSquadUser(new_member)
      // setMember(true)
   }

   function updateSquadUser(new_member) {
      fetch(('/api/squadusers'), {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(new_member)
      })
         .then(res => res.json())
         .then(data => 
            setSquadUserList([...squadUserList, data]),
            setMember(true))
   }



   // SQUADUSER: remove from "squaduser" table
   function leaveSquad() {
      alert(squadNumber)
      alert(user.id)
      let temp_id_list = squadUserList.filter((data) => ((data.squad_id == squadNumber) && (data.user_id == user.id)))
      let item = temp_id_list[0].id
      // DELETE on squaduser.... to set membership to false
      // setMember(false)

      fetch(`/api/squadusers/${item}`, {
         method: "DELETE",
      })
         .then(res => res.json())
         .then(data => {
            let updatedList = squadUserList.filter((data) => data.id != item)
            setSquadUserList(updatedList)
            setMember(false)
         })
   }


 
   // ### using login
   const updateUser = (user) => {
      setUser(user)
      let tempSquads = [...squadList]
         setDisplayedSquads(tempSquads)
    
   }


   // ########## FOR LOGOUT
   function logOut() {
      fetch('/api/logout', { method: "DELETE" })
         .then(res => {
            if (res.ok) {
               updateUser(null)
               
            }
         })
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


            <Route path="squads" element={<Squads user={user} makePosting={makePosting} logOut={logOut} toggleView={toggleView}  member={member} squadList={squadList} displayedSquads={displayedSquads} displayedPosts={displayedPosts} deleteCard={deleteCard} active={active} deletePost={deletePost} editPost={editPost} joinSquad={joinSquad} leaveSquad={leaveSquad} />} />

            <Route path="create" element={<Create addSquad={addSquad} />} />
         </Routes>
      </>
   )
}

export default App
