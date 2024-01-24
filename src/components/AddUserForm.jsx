import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/UserActions';
import { addUser } from '../actions/UserActions';

const AddUserForm = () => {
  const [notValid, setNotValid] = useState(false)
  const dispatch = useDispatch();
  const users = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  
  const [newUser, setNewUser] = useState({id: `${users.length + 1}`, name: '', email: '' , phone: ''});

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(newUser));
    setNewUser({ name: '', email: '' , phone: ''});
  };

  // if(newUser.name && newUser.email.includes('@') && !isNaN(newUser.phone)){
  //   setNotValid(false)
  // } else {
  //   setNotValid(true)
  // }

  return (
    <div>
      <h2>Add User</h2>
      {notValid && <div style={{color:'red'}}>Please enter valid inputs</div>}
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder='name' name="name" value={newUser.name} onChange={handleChange} />
          <input type="text" placeholder='email' name="email" value={newUser.email} onChange={handleChange} />
          <input type="number" placeholder='phone' name="phone" value={newUser.phone} onChange={handleChange} />
        <button disabled={notValid} type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
