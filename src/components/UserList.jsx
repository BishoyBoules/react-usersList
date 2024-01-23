import React, {useState} from 'react'
import User from './User'

const UserList = ({usersList}) => {
    

  return (
    <ul id='usersList'>
        {usersList.map(user => (
            <li className='userName' key={user.id}>
                <User user={user}/>
            </li>
        ))}
    </ul>
  )
}

export default UserList