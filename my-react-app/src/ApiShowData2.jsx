import React, { useContext } from 'react'
import { Context } from './ContextP'
const ApiShowData2 = () => {
     let  {state,dispatch}=     useContext(Context)
    //  console.log(data,"isko dekhoo");
  return (
    <div>
      { state.data.map((a)=>{
        return(<>
        <h2>{a.name}</h2>
        </>)
       })}
    </div>
  )
}

export default ApiShowData2