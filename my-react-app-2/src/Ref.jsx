import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
     let [myData, SetMyData] = useState("")
    // // let [count,SetCount] =useState(0)

    // let data = useRef(0)
    // console.log(data)

    // useEffect(() => {
    //     data.current = data.current + 1
    //     // SetCount(count+1);
    // })

    
    let data =useRef(null)
    

   function done(){
    let val=data.current.value
    console.log(val,"hehe")
    SetMyData(val);
   }

    return (
        <div>
            {/* <input type="text" value={myData} onChange={(e) => SetMyData(e.target.value)} />
            <p>number of times render: {data.current}</p> */}

            <input type="text" ref={data}  name='' />
            <button onClick={done}>click</button>
            <p>{myData}</p>



        </div>
    )
}

export default Ref