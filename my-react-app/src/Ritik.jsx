import React, { useContext } from 'react'
import Context from './Context'
import Day9 from './Day9'

const Ritik = () => {
    let data =useContext(Context)
    console.log(data)
  return (
    
    <div>Props: {data}</div>
  )
}

export default Ritik

main => app => Day9 => Ritik