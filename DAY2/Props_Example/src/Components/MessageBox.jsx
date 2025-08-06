// child component

// import React from 'react'
// import App from '../App'

// function MessageBox({name , color ,age}) {
//   return (
//     <>
//     <h1 style={{color : color}}>
//         my name is {name} and my age is {age} 
//     </h1>
//     </>
//   )
// }

// export default MessageBox



// =====================================

// Default props 

import React from 'react'

function MessageBox({name1="raj",color1="red",bgc="yellow"}) {
  return (
    <>
    <h1 style={{color:color1 , backgroundColor:bgc}}>my name is {name1}</h1>
    </>
  )
}

export default MessageBox