import React from 'react'

export const AddUserReducer = (state={users:[]}, action) => {
  switch(action.type){
    case 'add':
        return {users: action.payload}
    
    default:
        return state
  }
}
