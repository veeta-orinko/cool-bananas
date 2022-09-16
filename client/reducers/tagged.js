import { SET_IMAGES } from '../actions/tagged'

function tagged(state = [], action) {
  const { type, payload } = action

  switch (type) {
    case SET_IMAGES:
      return payload
    default:
      return state
  }
}

export default tagged

export const selectImages = (state) => state.tagged
