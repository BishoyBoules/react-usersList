import React from "react"
const FavsAction = (fav) => (dispatch, getState) => {
    const {AddUser: favs} = getState()

    const hasUser = favs.includes(i => i.id === fav)

    if(!hasUser){
        dispatch({
            type: 'check',
            payload: [{id: favs.length, fav}, ...favs]
        })
    }
}


export default FavsAction