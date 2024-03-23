
import React from 'react'


function Logout( {logOut} ) {
   logOut()
   return (
      <div className="about-container">
         <div className="card-container">
            <h1>Logout</h1>
         </div>
      </div>
      
   )
}

export default Logout;