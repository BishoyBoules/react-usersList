export const fetchUsers = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        dispatch({ type: 'FETCH_USERS', payload: users });
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };
  };
  
  export const addUser = (user) => {
    return { type: 'ADD_USER', payload: user };
  };