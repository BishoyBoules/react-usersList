import React, {useState} from 'react'
import User from './User'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [showDetails, setShowDetails] = useState([])
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(json => setUsers(json))
    .catch(error => console.log(error))

  return (
    <ul id='usersList'>
        {users.map(user => (
            <li className='userName' key={user.id}>
                <User user={user}/>
            </li>
        ))}
    </ul>
  )
}

export default UserList