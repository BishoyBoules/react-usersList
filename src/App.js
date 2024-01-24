import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import UserList from './components/UserList';
import AddUserForm from './components/AddUserForm';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <header className='App-header'>Users List</header>
        <AddUserForm />
        <UserList/>
      </div>
    </Provider>
  );
}

export default App;
