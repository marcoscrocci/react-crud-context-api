import { 
  ADDING_USER,
  REMOVE_USER,
  ADD_USER,
  USER_ADDED,
  EDIT_USER
} from './actionTypes'

export default (state, action) => {
  switch (action.type) {
    case ADDING_USER:
      console.log('AppReducer ADDING_USER')
      return {
        ...state,
        isAddingUser: true,
        errorAddingUser: false
      }

    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(user => {
          return user.id !== action.payload;
        })
      }
    case USER_ADDED:
      console.log('AppReducer USER_ADDED')
      return {
        ...state,
        users: [action.payload, ...state.users]
      }
    case EDIT_USER:
      const updateUser = action.payload;

      const updateUsers = state.users.map(user => {
        if (user.id === updateUser.id) {
          return updateUser;
        }
        return user;
      })
      return {
        ...state,
        users: updateUsers
      }

    default:
      return state;
  }
}