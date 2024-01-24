import React from 'react'
import User from './User'
// import {fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure} from '../actions/UserActions'
// import { connect } from 'react-redux'

const UserList = (props) => {
  return (
    <ul id='usersList'>
        {props.users.map(user => (
            <li className='userName' key={user.id}>
                <User user={user}/>
            </li>
        ))}
    </ul>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     users: state.users
//   }
// }

// const dispatchStateToProps = (dispatch) => {
//   return {
//     fetchUsersRequest: () => dispatch(fetchUsersRequest()),
//     fetchUsersSuccess: () => dispatch(fetchUsersSuccess()),
//     fetchUsersFailure: () => dispatch(fetchUsersFailure())
//   }
// }

export default UserList