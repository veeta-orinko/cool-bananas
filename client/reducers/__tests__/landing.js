import { SET_LANDING_CONTENT } from '../../actions/landing'
import landing from '../landing'

const landingContentMockData = {
  captionId: 2,
  captionText: 'mockCaptionText',
  imageId: 2,
  imageUrl: 'mockImageUrl'
}

describe('landing reducer', () => {
  it('returns the action payload for type SET_LANDING_CONTENT.', () => {
    const action = {
      type: SET_LANDING_CONTENT,
      payload: landingContentMockData,
    }
    const initialState = { }
    const expectedState = landingContentMockData
    const outputState = landing(initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = { }
    const outputState = landing(undefined, { })

    expect(outputState).toEqual(expectedState)
  })
})
