import { getLandingContent } from '../apis/landing'

export const SET_LANDING_CONTENT = 'SET_LANDING_CONTENT'

export function setLandingContent(LandingContent) {
  return {
    type: SET_LANDING_CONTENT,
    payload: LandingContent,
  }
}

export function fetchLandingContent() {
  return (dispatch) => {
    return getLandingContent().then((landingContent) => {
      dispatch(setLandingContent(landingContent))
      return null
    })
    .catch((error) => {
      console.error(error.message)
    })
  }
}
