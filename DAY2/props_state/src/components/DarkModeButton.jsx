import React from 'react'

function DarkModeButton({darkMode , onToggle}) {
  return (
    <button onClick={onToggle} style={{
        padding: "10px",
        backgroundColor :darkMode ? "white" : "black",
        color : darkMode ? "black" :"white",
        cursor:"pointer"
    }}>
        {darkMode ? "lightmode" : "darkMode"}
    
    </button>
  )
}

export default DarkModeButton