import React, { useEffect, useState } from 'react'
import './Day5.css'

const Day5 = () => {
    // let [count, SetCount] = useState(0);
    let [input, SetInput] = useState([]);

    useEffect(() => {
        // console.log("hello");
        fetch('https://jsonplaceholder.typicode.com/todos').
            then((res) => {
                return res.json()

            }).then((data) => {
                SetInput(data)
                console.log(data);

            })

    }, [])

    function d(index){
        let newArr =input.filter((a)=>{
            return a.id !== index
        })
         SetInput(newArr);
    }
   


    return (
        <div>
            {/* <button onClick={() => SetCount(count + 1)}> count {count}</button> */}
            <div id='parent_Card'>

                {
                    input.map((a) => {
                        return (<div id='card' onClick={()=>d(a.id)}>
                            <h2>{a.id}</h2>
                            <h1>{a.title}</h1>
                            <button>add</button>

                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Day5