import React from 'react'

const UserDetails = ({name, email, phone}) => {
  return (
    <div>
        <h1>{name}</h1>
        <h2>{email}</h2>
        <h2>{phone}</h2>
    </div>
  )
}

export default UserDetails