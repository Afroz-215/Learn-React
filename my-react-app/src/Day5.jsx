// import React, { useEffect, useState } from 'react'
// import './Day5.css'

// const Day5 = () => {
//     // let [count, SetCount] = useState(0);
//     let [input, SetInput] = useState([]);

//     useEffect(() => {
//         // console.log("hello");
//         fetch('https://jsonplaceholder.typicode.com/todos').
//             then((res) => {
//                 return res.json()

//             }).then((data) => {
//                 SetInput(data)
//                 console.log(data);

//             })

//     }, [])

//     function d(index){
//         let newArr =input.filter((a)=>{
//             return a.id !== index
//         })
//          SetInput(newArr);
//     }
   

//     function saveData(data){
//         localStorage.setItem('key',JSON.stringify(data))
//     }

//     // function deleteFromLS(id){
//     //       let save =JSON.parse(localStorage.getItem('key',))
//     // }
      
    


//     return (
//         <div>
//             {/* <button onClick={() => SetCount(count + 1)}> count {count}</button> */}
//             <div id='parent_Card'>

//                 {
//                     input.map((a) => {
//                         // return (<div id='card' onClick={()=>d(a.id)}>
//                          return (<div id='card'>
//                             <h2>{a.id}</h2>
//                             {/* <h1>{a.title}</h1> */}
//                             <button onClick={()=>{saveData(a)}}>add</button>
//                             <button onClick={()=>{deleteFromLS(a.id)}}>delete</button>

//                         </div>)
//                     })
//                 }
//             </div>
//         </div>
//     )
// }

// export default Day5

// import React, { useEffect, useState } from 'react'
// import './Day5.css'
// import ApiDataShow from './ApiDataShow';
// const Day5 = ({input,SetInput}) => {


//     useEffect(()=>{
//         // console.log("hello");
//         fetch('https://dummyjson.com/recipes').
//         then((res)=>{
//             return res.json()

//         }).then((data)=>{
//             SetInput(data.recipes)
//             console.log(data.recipes,"mai hu kaun");
            
      
            
//         })
        
//     },[])



    


    
//   return (
//     <div>
//      <ApiDataShow  data={input} />
      
//     </div>
//   )
// }

// export default Day5   


import React, { useEffect, useState } from 'react'
import './Day5.css'
import ApiDataShow from './ApiDataShow';
import { Link } from 'react-router-dom';
const Day5 = ({input,SetInput,cartData,SetCartData}) => {


    useEffect(()=>{
        // console.log("hello");
        fetch('https://dummyjson.com/recipes').
        then((res)=>{
            return res.json()

        }).then((data)=>{
            SetInput(data.recipes)
            console.log(data.recipes,"mai hu kaun");
            
      
            
        })
        
    },[])



    


    
  return (
    <div>
      <Link to={'/cart'} > 
        <button  style={{backgroundColor:"green", height:"50px",width:"100px"}}>cart  {cartData.length}</button>
        </Link>
     <ApiDataShow  data={input}   cartData={cartData}  SetCartData={SetCartData} />
      
    </div>
  )
}

export default Day5   