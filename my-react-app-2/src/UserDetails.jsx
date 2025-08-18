import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  let users = [{ id: 1, name: "rimi" }, { id: 2, name: "ritik" }, { id: 3, name: "priyal" }]

  let { id } = useParams()
  let userData = users.find((a) => {
    return a.id == id

  })
  console.log(userData);



  return (
    <div>
      <h1> UserDetails  </h1>
      
        <h5>User Id: {userData.id}</h5>
        <h5>userName: {userData.name}</h5>
      

    </div>
  )
}

export default UserDetails