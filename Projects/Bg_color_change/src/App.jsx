import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [color, bgchange] = useState('black')

  function colorchange(color){
	
  }
  return (
    <>
      <div className='flex flex-wrap justify-center align-middle h-screen ' style={{backgroundColor : color}}>
		<div className='flex flex-wrap justify-center align-middle rounded-b-xl bg-white p-3 m-2 gap-3 h-20'>
			<button className='p-3 rounded text-black hover:scale-105'
			style={{backgroundColor : 'red'}}onClick={() =>{bgchange("red")}}
			>red</button>
			<button className='p-3 rounded text-white hover:scale-105'
			style={{backgroundColor : 'green'}} onClick={() =>{bgchange("green")}}
			>green</button>
			<button className='p-3 rounded text-black hover:scale-105'
			style={{backgroundColor : 'yellow'}} onClick={() =>{bgchange("yellow")}}
			>yellow</button>
			<button className='p-3 rounded text-white hover:scale-105'
			style={{backgroundColor : 'black'}} onClick={() =>{bgchange("black")}}
			>black</button>
			<button className='p-3 rounded text-white hover:scale-105'
			style={{backgroundColor : 'purple'}} onClick={() =>{bgchange("purple")}}
			>purple</button>
		</div>
      </div>
    </>
  )
}

export default App
