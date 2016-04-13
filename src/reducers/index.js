const user = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
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
    case 'ADD_TODO':
      return [
        ...state,
        user(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        user(t, action)
      )
    default:
      return state
  }
}

export default users