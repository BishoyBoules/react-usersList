const initialState = {
  users: [],
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
      case 'FETCH_REQUEST' :
          return {
              users: [...state],
              error: ""
          }
      case 'FETCH_SUCCESS' :
          return {
              users: action.payload,
              error: ""
          }
      case 'FETCH_FAILURE' :
          return {
              users: [],
              error: action.payload
          }    
  }
}

export default reducer