import React, { useState } from 'react'

function StateChildComponent() {
   const[followers , setFollowers] = useState(100);

   const follow = () => setFollowers(followers+1);
   const unFollow = () => setFollowers(followers-1);
  return (
    <>
    <h1>Followers : {followers}</h1>
    <button onClick={follow} style={{marginRight:"10px" ,backgroundColor :"green",color:"white",border:"none", cursor:"pointer"}}>
      Follow
    </button>

    <button onClick={unFollow} style={{marginRight:"10px" ,backgroundColor :"green",color:"white", border:"none", cursor:"pointer"}}>
      UnFollow
    </button>
    </>
  )
}

export default StateChildComponent