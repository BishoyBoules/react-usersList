export const fetchUsersRequest = (state) => {
    return {
        type: 'FETCH_REQUEST',
        users: state.users
    }
}

export const fetchUsersSuccess = (state) => {
    return {
        type: 'FETCH_SUCCESS',
        users: state.users
    }
}

export const fetchUsersFailure = (state) => {
    return {
        type: 'FETCH_FAILURE',
        users: state.users
    }
}
