import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import Day2 from './day2.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Home/>
    <Day2/>
    
  </StrictMode>,
)
