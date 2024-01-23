import React, {useState} from 'react';
import './App.css';
import { Provider } from 'react-redux'
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import store from './store'

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
      <Provider store={store}>
        <AddUserForm/>
        <UserList usersList={users}/>
      </Provider>
    </div>
  );
}

export default App;
