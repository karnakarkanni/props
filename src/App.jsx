import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './second'
function App() {

  var a=10

  return (
    <>
    <h1>this is karnakar</h1>
    <Hello c={a}/>
     
    </>
  )
}

export default App
