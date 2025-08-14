// // React controlled component
// // in this we are using useState

// import React from 'react'
// import { useState } from 'react'
// import Child from './Child';

// function App() {

// const[name,setName] = useState("");
// const[pswd,setPswd] = useState("");

// function handleChange(e){
//   console.log(e.target.value); 
// let capName =  e.target.value.toUpperCase();
// // setName(e.target.value)
// setName(capName)
// }

// function handlePassword(e){
//   console.log(e.target.value);
//   setPswd(e.target.value)
// } 

//   return (
//     <>
//        <form action="">
//           <label htmlFor="">FName :</label>
//           <input type="text" value={name}  onChange={handleChange}/> <br />
//            <label htmlFor="">Password :</label>
//           <input type="text" value={pswd}  onChange={handlePassword}/>
//        </form>
//        <Child name={name}/>
//     </>
//   )
// }

// export default App




import React from 'react'
import { useState } from 'react';

function App() {

 const[name,setName] = useState("");
const[pswd,setPswd] = useState("");


function handleChange(e){
    // console.log(e.target.value);
    if (e.target.name == 'firstname') {
     const capName= (e.target.value).toUpperCase();
     setName(capName)
    } else {
      setPswd(e.target.value)
    }
}
  return (
  <>
   <form action="">
           <label htmlFor="">FName :</label>
          <input type="text" value={name} name='firstname'  onChange={handleChange}/> <br />
            <label htmlFor="">Password :</label>
           <input type="text" value={pswd} name='password' onChange={handleChange}/>
       </form>
  </>
  )
}

export default App