import React, { useState } from 'react'

function ButtonLike() {

    const[count,setCount] = useState(100);

    function handleIncre(){
           setCount(count+1);
    }

    function handleDecre(){
        setCount(count-1);
        console.log(count);
    }
  return (
    <>
     <button onClick={handleIncre}>❤️ Like increment</button>
     <button onClick={handleDecre}>❤️ Like Decrement</button>

     <h1>Your Count is : {count}</h1>
    </>
  )
}

export default ButtonLike