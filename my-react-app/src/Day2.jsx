// import React, { useState } from 'react'

// const Day2 = () => {

//     let [count, SetCount] = useState(0)
//     // let [color, SetColor] = useState('pink')
//     let [color,SetColor] =useState(true)

//     function fun1() {
//         SetCount(count + 1)
//     }

//     function fun2() {
//         SetColor(!color)
//     }
//     return (
//         <div style={{ /*backgroundColor: color,*/
//             backgroundColor:color?'pink':'greenyellow',
//             height:'400px',
//             padding:'20px'
          
         
//           }}>
//             <h3>{count}</h3>
//             <button onClick={fun1}>incre</button>
//             <br />
//             <br />
//             <button onClick={() => SetCount(count - 1)}>decre</button>
//             <br />
//             <br />
//             <button onClick={() => SetCount(0)}>reset</button>
//             <br />
//             <br />
//             {/* <button onClick={() => SetColor('blue')}>color</button> */}
//             <button onClick={fun2}>color</button>
//         </div>
//     )
// }

// export default Day2


import React, { useState } from 'react'

const Day2 = () => {
    let [input, setInput]  =  useState(" ")
    function fun1 (e){
        setInput(e.target.value)
    }

  return (
    <div>
        <h2>{input}</h2>
        <input onChange={fun1} type="text" placeholder='enter name' />
    </div>
  )
}

export default Day2