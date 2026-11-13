import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// Hooks in react 

function App() {
  
  function add(){
    setfun(value + 1)
  }
  function sub(){
    if(value < 1)return
    else{
      setfun(value - 1)
    }
  }
  const[value , setfun] = useState(10)
  return (
    <>
      <p>Hooks in react Working</p><br/>
      <button onClick={add}>Add</button><p>{value}</p><br/>
      <button onClick={sub}>Delete</button><p>{value}</p>
    </>
  )
}

export default App
