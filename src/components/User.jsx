import React, {useState} from 'react'
import UserDetails from './UserDetails'

const User = ({user}) => {
    const [showDetails, setShowDetails] = useState(false)
    const [fav, setFav] = useState(false)
  return (
    <div>
        <h1>{user.name}</h1>
        {fav && <h1>Favorite</h1>}
        <button onClick={() => setShowDetails(!showDetails)}>More Details</button>
        <input type='checkbox' id={`user${user.id}`} onChange={() => setFav(!fav)}/>
        {showDetails && <UserDetails name={user.name} email={user.email} phone={user.phone}/>}
    </div>
  )
}

export default User