// // first way 
// import React, { useContext } from 'react'
// import { DataContext } from './App';

// function Child1() {
//    let name1 =  useContext(DataContext);// we can use direct by using this useContext(DataContext)
//   return (
//     <>
//     <h1>My name is :{name1}</h1>
//     </>
//   )
// }

// export default Child1


// // in first way 
// // useContext hook :- it wil accept single argument 


// =========================================


// second way to access the data

import React from 'react'
import { DataContext } from './App'


function Child1() {
  return (
    <>
     <DataContext.Consumer>
        {
            (name) =>{
                return(
                    <>
                    <h1>my name is :{name}</h1>
                    </>
                )
            }
        }
     </DataContext.Consumer>
    </>
  )
}

export default Child1