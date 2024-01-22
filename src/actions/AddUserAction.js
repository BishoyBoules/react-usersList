import React from "react"
const AddUsersAction = (user) => (dispatch, getState) => {
    const {AddUser: Users} = getState()

    const hasUser = Users.includes(i => i.name === user)

    if(!hasUser && user){
        dispatch({
            type: 'add',
            payload: [{id: Users.length, user}, ...Users]
        })
    }
}


export default AddUsersAction