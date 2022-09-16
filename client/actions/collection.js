import { getImagesByUserId } from '../apis/collection'

export const SHOW_COLLECTION = 'SHOW_COLLECTION'
export const SET_ERROR = 'SET_ERROR'

//Thunk
export function fetchCollection(userId) {
  return (dispatch) => {
    return getImagesByUserId(userId)
      .then((collection) => {
        dispatch(showCollection(collection))
        return null
      })
      .catch((err) => {
        dispatch(setError(err.message))
      })
  }
}

// Simple action
export function showCollection(collection) {
  return {
    type: SHOW_COLLECTION,
    payload: collection,
  }
}

export function setError(errMessage) {
  return {
    type: SET_ERROR,
    errMessage,
  }
}
