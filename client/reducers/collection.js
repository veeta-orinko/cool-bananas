import { SHOW_COLLECTION } from '../actions/collection'

const initialState = []

const collectionReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SHOW_COLLECTION:
      return payload

    default:
      return state
  }
}

export default collectionReducer
