// UserList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../actions/UserActions';
import User from './User'

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className='usersDiv'>
        <ul className='usersList'>
          {users.map(user => (
            <User key={user.id} user={user}/>
          ))}
        </ul>
    </div>
  );
};

export default UserList;
