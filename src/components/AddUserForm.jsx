import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUsersRequest} from '../actions/UserActions'

const AddUserForm = () => {
    // const usersList = useSelector(state => state.users)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch()

    function handleSubmit (e) {
      e.preventDefault()
      dispatch(fetchUsersRequest({ name, email, number}))
      fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({name: name, email: email, number: number})
      })
      .then(res => res.json)
      .then(data => console.log(data))
      .catch(error => console.log(error))
    }

  return (
    <div>
        <h1>Add New User</h1>
        <form onSubmit={handleSubmit}>
            <input 
            type='text' 
            placeholder='name' 
            onChange={e => setName(e.target.value)}/>
            <input 
            type='text' 
            placeholder='email'
            onChange={e => setEmail(e.target.value)}/>
            <input 
            type='text' 
            placeholder='phone number'
            onChange={e => setNumber(e.target.value)}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddUserForm