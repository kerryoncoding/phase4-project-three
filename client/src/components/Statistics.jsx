import React, {useContext} from "react"
import ThemeContext from './ThemeContext'

function Statistics() {

   const { theme } = useContext(ThemeContext);

   return (
      <div className={`your-component ${theme}`}>
         <h1>Yeah stats!!!</h1>

      </div>
   )
}

export default Statistics
