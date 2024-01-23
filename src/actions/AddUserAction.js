const AddUsersAction = (user) => (dispatch, getState) => {
    const {AddUser: users} = getState()

    const list = fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(json => json)
    .catch(error => console.log(error))

    const hasUser = list.includes(i => i.name === user)
    console.log(list);

    if(!hasUser && user){
        dispatch({
            type: 'add',
            payload: [{id: list.length, user}, ...list]
        })
    }
}


export default AddUsersAction