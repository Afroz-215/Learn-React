// import React, { useMemo, useState } from 'react'

// const Memo = () => {
//     let [count,setCount]= useState(0);
//     let val =useMemo(()=>{
//         let data=0;
//         for(let i=0;i<1000000000;i++){
//             data+=i;
//         }
//         return data;
//     },[])
//   return (
//     <div>
//         <h2>{val}</h2>
//         <h1 onClick={()=>setCount(count+1)}>count: {count}</h1>
//     </div>

//   )
// }

// export default Memo


import React, { Children, memo, useCallback, useMemo, useState } from 'react'

const Memo = () => {
    let [count, setCount] = useState(0);
    let [state, setState] = useState(0);

    console.log("app file");


    // let even = useMemo(() => {
    //     return () => {
    //         console.log("hello")
    //     }   
    // }, [])

    let even =useCallback(()=>{
        console.log("first")
    })
    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>++</button>
            <button onClick={() => setCount(state - 1)}>--</button>
            <MemoizedFile even={even}/>
        </div>
    )
}

export default Memo



let MemoizedFile = memo(function ChildApp() {
    console.log("child file")
    return (
        <div>
            <h2>childdd</h2>
        </div>
    )
})


