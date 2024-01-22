import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';
import store from './store'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>Users List</header>
      <Provider store={store}>
        <AddUserForm/>
        <UserList/>
      </Provider>
    </div>
  );
}

export default App;
