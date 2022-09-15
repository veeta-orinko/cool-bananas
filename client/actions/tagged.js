import { getImages } from '../apis/tagged'

export const SET_IMAGES = 'SET_IMAGES'

export function setImages(images) {
  return {
    type: SET_IMAGES,
    payload: images,
  }
}

export function fetchImages() {
  return (dispatch) => {
    return getImages()
      .then((images) => {
        dispatch(setImages(images))
        return null
      })
      .catch((error) => {
        console.error(error.message)
      })
  }
}
