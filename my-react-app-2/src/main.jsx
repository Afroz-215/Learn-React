// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import {BrowserRouter}  from 'react-router-dom'
// import App from './App.jsx'
// import  ContextProvider from './Context.jsx'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ContextProvider> 
//       <BrowserRouter> 
//     <App />
//     </BrowserRouter>
//     </ContextProvider>
//   </StrictMode>,
// )


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <App />
//)


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";   // ✅ Tailwind styles come from here

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
