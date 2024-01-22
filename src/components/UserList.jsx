import React, {useState, useEffect} from 'react'
import UserDetails from './UserDetails'

const UserList = (usersList) => {
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
                <h1>{user.name}</h1>
                <button onClick={() => setShowDetails(!showDetails[user.id])}>More Details</button>
                <input type='checkbox' id={`user${user.id}`} onClick={() => console.log(user.id)}/>
                {showDetails[user.id] && <UserDetails name={user.name} email={user.email} phone={user.phone}/>}
            </li>
        ))}
    </ul>
  )
}

export default UserList