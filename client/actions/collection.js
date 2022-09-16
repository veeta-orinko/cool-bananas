import { addImagesByUserId } from '../apis/collection'

export const SHOW_COLLECTION = 'SHOW_COLLECTION'

export function showCollection(collection) {
  return {
    type: SHOW_COLLECTION,
    payload: collection,
  }
}

//Thunk
export function fetchCollection(userId) {
  return (dispatch) => {
    return addImagesByUserId(userId).then((collection) => {
      dispatch(showCollection(collection))
      return null
    })
  }
}
