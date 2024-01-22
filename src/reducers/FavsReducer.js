import React from 'react'

export const FavsReducer = (state={favs:[]}, action) => {
  switch(action.type){
    case 'check':
        return {favs: action.payload}
    default:
        return state
  }
}