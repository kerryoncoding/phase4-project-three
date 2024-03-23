import React from "react"
import Login from "./Login"

function Home({ user, updateUser }) {


   if (!user) return (
      <>
         <Login updateUser={updateUser} />
      </>
   )
   // alert(user.username)
   return (
      <div className="home-container">
         <h1>Welcome to PodSquad, {user.username}!</h1>
         
         <img src="http://www.kerryoncoding.com/images/podsquad_notext.jpg" alt="microphone image" className="homeImage" />
         <h2>Come chat about your favorite podcast!</h2>
      </div>
   )
}

export default Home
      