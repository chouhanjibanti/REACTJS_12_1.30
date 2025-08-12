import React, { useState } from 'react'
import StateChildComponent from './components/StateChildComponent'
import DarkModeButton from './components/DarkModeButton'
import DarkModeContent from './components/DarkModeContent'

function App() {
const [darkMode , SetDarkMode] = useState(false)

const toggleTheme = () =>{
  SetDarkMode(!darkMode);// false  // true
}

  return (
     <div style={{
      backgroundColor : darkMode ? "#121212": "#ffffff",
      color : darkMode ?   "#ffffff" :  "#121212",
      height :"1000px",
      padding: "20px"
     }}>
      <h1>Social Media App</h1>
      <DarkModeButton darkMode = {darkMode}  onToggle= {toggleTheme}/>
    <DarkModeContent darkMode={darkMode}/>
     </div>
  )
}

export default App