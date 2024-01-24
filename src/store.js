import {createStore} from 'redux';
import reducer from './reducers/AddUserReducer';

export const store = createStore(reducer)