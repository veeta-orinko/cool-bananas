import { SET_LANDING_CONTENT } from '../actions/landing'

const initialState = { }

const landing = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_LANDING_CONTENT:
      return payload
    default:
      return state
  }
}

export default landing
