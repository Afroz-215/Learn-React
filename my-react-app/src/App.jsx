// import React from 'react'
// import './App.css'

// const App = () => {
//   let arr = [1, 2, 3, 4, 5, 6]

//   function fun1(){
//     console.log("first")
//   }
//   return (
//     <>
//     {/* <button onClick={fun1}>click</button> */}
//     <div> 
//        {/* App */}
//       {/*
//         arr.map((a, b, c) => {
//           return (<>
//           <h1>{a}</h1>
//          </>)
//         })
//      */ }
//     </div>
//      </>
    
    
//   )
// }

// export default App


// import React from 'react'
// import Day2 from './day2'
// import Day3 from './Day3'

// const App = () => {
//   return (
//     <div>
//       {/* <Day2/> */}
//       <Day3/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Day4 from './Day4'
// import Day5 from './Day5'
// // import Day2 from './Day2'
// // import Day3 from './Day3'

// const App = () => {
//   let user="hello"
//   return (
//     <div>
//       {/* <Day2/> */}
//       {/* <Day3/> */}
//       {/* <Day4    data={user} /> */}
//       <Day5/>


//     </div>
//   )
// }

// export default App


// day6

// import React from 'react' 
// import Navbar from './Navbar'
// import Home from './Home'
// import Contact from './Contact'
// import { Route,Routes } from 'react-router-dom'

// const App = () => {
//   return (
//     <>
    
//     <Navbar/>
//     <Routes>
//       <Route path='/' element={<Home/>} />
//       <Route path='/contact' element={<Contact/>} />
//     </Routes>
//     </>
//   )
// }

// export default App


// import React from 'react'
// // import SignUp from './SignUp'
// // import Login from './Login'
// // import { Route,Routes } from 'react-router-dom'

// const App = () => {
//   return (
//     <div>
//        <Day7/>
//       {/* <Routes>
//         <Route path='/' element={<SignUp/>}   />
//         <Route path='/login' element={<Login/>} />
//       </Routes> */}
     
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Day7 from './Day7'
// import Day8 from './Day8'
// import Day9 from './Day9'

// const App = () => {
//   return (
//     <div>
//       {/* <Day7/> */}
//       {/* <Day8/> */}
//       <Day9/>

//     </div>
//   )
// }

// export default App



import React,{useState} from 'react'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
// import Home from './Home'
// import Day7 from './Day7'
import Day8 from './Day8'
import Day9 from './Day9'
import Day5 from './Day5'
import Cart from './Cart'
const App = () => {
  let [input ,SetInput]=useState([]);
  let [cartData,SetCartData]=useState([])

  console.log(cartData,"dyan se dekhooo");
  

  return (
    <div>
      {/* <Day7/> */}
      {/* <Day8/> */}
      {/* <Day9/> */}
      {/* <Day10/> */}
      <Routes>
        <Route  path='/cart' element={  <Cart   cartData={cartData}  />} />
        <Route  path='/'  element={      <Day5 input={input}   cartData={cartData}  SetCartData ={SetCartData}   SetInput={SetInput}/>}/>
      </Routes>
    

      {/* <NavBar/>
      // <Routes>
      //   <Route  path="/" element={<Home/>}/>
      //   <Route path='/contact'  element={<Contact/>}/>
      // </Routes> */}
    </div>
  )
}

export default App

