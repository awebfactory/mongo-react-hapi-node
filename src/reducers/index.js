const user = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      //console.log('state', state);
      //console.log('action', action);
      return {
        id: action.id,
        user: action.user,
      }
    default:
      return state
  }
}

const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      console.log('state before adding user', state);
      return [
        ...state,
        user(undefined, action)
      ]
    default:
      return state
  }
}

export default users