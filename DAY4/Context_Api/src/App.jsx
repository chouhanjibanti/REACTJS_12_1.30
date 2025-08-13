// App.jsx -> provider
import React, { createContext } from 'react'
import Child1 from './Child1';

const DataContext =  createContext();
function App() {

  const name = "tushar1";
  return (
    <>
      <DataContext.Provider value={name}>
         <Child1/>
      </DataContext.Provider>
    </>
  )
}

export default App
export {DataContext}

// function declaration
// create context
// cover the child component who will access the data.