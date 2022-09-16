import { SET_DASHBOARD_CONTENT } from '../../actions/dashboard'
import dashboard from '../dashboard'

const dashboardContentMockData = [
  {
    imageId: 1,
    auth0ImageId: '1',
    captionId: 1,
    imageUrl: '/mockImageUrl',
    captionText: 'mockCaptionText',
  },
]

describe('dashboard reducer', () => {
  it('returns the action payload for type SET_DASHBOARD_CONTENT.', () => {
    const action = {
      type: SET_DASHBOARD_CONTENT,
      payload: dashboardContentMockData,
    }
    const initialState = {}
    const expectedState = dashboardContentMockData
    const outputState = dashboard(initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = [
      {
        imageId: 1,
        auth0ImageId: '1',
        captionId: 1,
        imageUrl: '/images/banana0.png',
        captionText: 'Banananana',
      },
    ]
    const outputState = dashboard(undefined, {})

    expect(outputState).toEqual(expectedState)
  })
})
