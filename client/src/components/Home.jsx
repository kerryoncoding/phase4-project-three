
import React, { useContext } from "react"
import ThemeContext from './ThemeContext'



function Home({ user, logOut }) {
   

   function handleLogout() {
      logOut()
   }

   const { theme, toggleTheme } = useContext(ThemeContext)


   return (
      <>
         <div className={`your-component ${theme}`}>
         <button onClick={toggleTheme}>Toggle Theme</button>
            <div className="logout">
               <button className="messageToggleButton" onClick={handleLogout}>Logout</button>
            </div>
            <div className="home-container">
               <h1>Welcome to PodSquad, {user.username}!</h1>
               <img src="http://www.kerryoncoding.com/images/podsquad_notext.jpg" alt="microphone image" className="homeImage" />
               <h2>Come chat about your favorite podcast!</h2>
            </div>
         </div>
      </>
   )
}


export default Home
      