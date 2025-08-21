// import React from 'react'
// import ApiShowData from './ApiShowData'
// import { Route, Routes } from 'react-router-dom'
// import Cart from './Cart'

// const App = () => {
//   return (
//     <div>
     
//       <Routes>
//         <Route  path='/' element ={<ApiShowData/>}/>
//         <Route  path='/cart' element ={<Cart/>}/>
//       </Routes>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Home from './Home'
// import { Route, Routes } from 'react-router-dom'
// import UserDetails from './UserDetails'
// const App = () => {
//   return (
//     <div>
//       <Routes >  
     
//       <Route  path='/'   element={ <Home/>}/>
//       <Route  path='/user/:id'   element={ <UserDetails/>}/>

//       </Routes>
      
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Memo from './Memo'
// import Ref from './Ref'

// const App = () => {
//   return (
//     <div>
//       {/* <Memo/> */}
//       <Ref/>
//     </div>
//   )
// }

// export default App


import React, { lazy, Suspense, useState } from 'react'
// import LazyLoading from './LazyLoading'
 const LazyC =lazy(()=>import('./LazyLoading'))

const App = () => {
  let [show,SetShow] =useState(false)
  
  return (
    <div>
      {/* {show?<LazyLoading/>:null} */}
      {
         show &&(<Suspense fallback='Loading...'><LazyC/></Suspense>)
      }
     
      <button onClick={()=>SetShow(true)}>click</button>

    </div>
  )
}

export default App
