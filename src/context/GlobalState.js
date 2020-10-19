import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { 
  ADDING_USER,
  REMOVE_USER,
  ADD_USER,
  EDIT_USER,
  USER_ADDED,
  USER_NOT_ADDED
} from './actionTypes'

// Initial State
const initialState = {
  users: [],
  isAddingUser: false,
  errorAddingUser: false
}

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeUser = (id) => {
    dispatch({
      type: REMOVE_USER,
      payload: id
    })
  }

  const addingUser = () => {
    console.log('AddingUser')
    return {
      type: ADDING_USER
    }
  }

  const userAdded = (user) => {
    console.log('userAdded')
    return {
      type: USER_ADDED,
      payload: user
    }
  }

  const addUser = (user) => {
    console.log('addUser')
    //return dispatch => {
      dispatch(addingUser())
      
      dispatch(userAdded(user))
    //}
    // dispatch({
    //   type: ADD_USER,
    //   payload: user
    // })
  }

  const editUser = (user) => {
    dispatch({
      type: EDIT_USER,
      payload: user
    })
  }

  return (
    <GlobalContext.Provider value={{
      users: state.users,
      removeUser,
      addUser,
      editUser
    }}>
      {children}
    </GlobalContext.Provider>
  )
}