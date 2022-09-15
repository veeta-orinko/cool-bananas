import { SET_DASHBOARD_CONTENT } from '../actions/dashboard'

const initialState = [
  {
    imageId: 1,
    auth0ImageId: '1',
    captionId: 1,
    imageUrl: '/images/banana0.png',
    captionText: 'Banananana',
  },
]

const dashboard = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_DASHBOARD_CONTENT:
      console.log('is this working?!?!:', payload)
      return payload
    default:
      return state
  }
}

export default dashboard
