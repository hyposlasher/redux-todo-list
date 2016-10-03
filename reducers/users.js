const initialState = {
  fetching: false,
  users: [],
}
const users = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS_START':
      return Object.assign({}, state, { fetching: true })
    case 'RECEIVE_USERS':
      return Object.assign({}, state, { fetching: false, users: action.payload})
    default:
      return state
  }
}

export default users
