import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const myobj = {
  Username : "Jp",
  password : 124
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App chg_nm = "Bored"/>
    <App chg_nm = "Exited"/>
  </StrictMode>,
)
