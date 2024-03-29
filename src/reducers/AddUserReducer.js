const AddUserReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USERS':
      return action.payload;
    case 'ADD_USER':
      return [...state, action.payload];
    case 'DELETE_USER':
      return state.filter(user => user.id !== action.payload);
    default:
      return state;
  }
};

export default AddUserReducer;