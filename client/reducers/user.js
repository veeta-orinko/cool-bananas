import { SET_USER, CLEAR_USER } from '../actions/user'

const initialState = {
  name: '',
  auth0Id: '',
  email: '',
  token: '',
}

export default function user(state = initialState, action) {
  const { type, payload } = action

  switch (type) {
    case SET_USER:
      return { ...state, ...payload }
    case CLEAR_USER:
      return initialState
    default:
      return state
  }
}
