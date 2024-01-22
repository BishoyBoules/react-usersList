import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddUsersAction from '../actions/AddUserAction'


const AddUserForm = () => {
    const Users = useSelector(state => state.Users)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const dispatch = useDispatch()

    function handleSubmit (e) {
      e.preventDefault()
      dispatch(AddUsersAction({name}))
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