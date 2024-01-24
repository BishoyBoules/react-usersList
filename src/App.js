import React, {useState} from 'react';
import './App.css';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';

function App() {
  const api = "https://jsonplaceholder.typicode.com/users"
  const [users, setUsers] = useState([])
    fetch(api)
    .then(res => res.json())
    .then(json => setUsers(json))
    .catch(error => console.log(error))

  return (
    <div className='App'>
      <header className='App-header'>Users List</header>
      <AddUserForm/>
      <UserList users={users}/>
    </div>
  );
}

export default App;
