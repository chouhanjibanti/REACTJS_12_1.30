// import React from "react";
// import MessageBox from "./MessageBox";

// function Parent() {
//   return (
//     <>
//       <h1>Props Example</h1>
//       <MessageBox name="zaheer" color="blue" age={20} />
//       <MessageBox name="vedant" color="red" age={20} />
//       <MessageBox name="nandini" color="pink" age={20} />
//     </>
//   );
// }

// export default Parent;

//for the default props

// import React from 'react'
// import MessageBox from "./MessageBox";

// function Parent() {
//   return (
//    <>
//     <MessageBox/>
//    </>
//   )
// }

// export default Parent

// ======================================
// Example of props and state
// import React, { useState } from "react";
// import MessageBox1 from "./MessageBox1";

// function Parent() {
//   const [name, setName] = useState("debugshala");
//   return (
//     <>
//       <h1>parent component</h1>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//       />

//         {/* pass state as props  */}
//       <MessageBox1 name={name} textColor="red" />
//     </>
//   );
// }

// export default Parent;
