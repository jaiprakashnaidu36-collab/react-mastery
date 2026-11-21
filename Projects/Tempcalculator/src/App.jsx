import { useState } from 'react'
import './App.css'
import {Temp} from './components'

function App() {
    const [temp_far , temp_fare] = useState(0)
  const [resu , result_] = useState()
 function calculate() {
  result_((temp_far - 32) * (5 / 9));
}
  return (
    <>
      <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    calculate();
                }}
            >
              <div className="w-full mb-1">
                <Temp
                  label = "Farenheight"
                  data = {temp_far}
                  onDataChange={(data)=>temp_fare(data)}
                  
                />

              </div>

                <div className="w-full mb-1">
              <Temp
                label = "Celcius"
                data = {resu}
                dataDisable
              />

              </div>
                <button 
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={calculate}>
                  click
                </button>
            </form>
          </div>
        </div>
    </>
  )
}

export default App
