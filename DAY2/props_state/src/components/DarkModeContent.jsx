import React from 'react'

function DarkModeContent({darkMode}) {
  return (
    <div style={{
        backgroundColor  : darkMode ? "red" : "purple",
        padding : "20px"
    }}>
       <h2>{darkMode ? "darkmode" : "lightmode"}</h2>
       <p>this is content </p>
    </div>
  )
}

export default DarkModeContent