import React, { useState } from 'react'

const Day3 = () => {
    let [input,SetInput] = useState({
        name:"",
        password:""
    })

    function fun1(e){
        let {name,value} = e.target
        // console.log(name, "=>" , value)
        SetInput({...input,[name]:value})
        console.log(input)
    }



  return (
    <div>
        <fieldset>
            <form action="">
                <input  name="name" value={input.name} onChange={fun1} type='text' placeholder='enter name'/>
                <br />
                <br />
                <input  name="password" value={input.password} onChange={fun1} type='text' placeholder='enter password'/>
                <br />
                <br />
                <button>submit</button>
                
            </form>
        </fieldset>
    </div>
  )
}

export default Day3