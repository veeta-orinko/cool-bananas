import { fetchLandingContent, SET_LANDING_CONTENT } from '../landing'
import { getLandingContent } from '../../apis/landing'

jest.mock('../../apis/landing')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

const landingContentMockData = {
  captionId: 2,
  captionText: 'mockCaptionText',
  imageId: 2,
  imageUrl: 'mockImageUrl'
}

describe('fetchLandingContent', () => {
  it('dispatches the SET_LANDING_CONTENT action.', () => {
    getLandingContent.mockReturnValue(Promise.resolve(landingContentMockData))
    return fetchLandingContent()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_LANDING_CONTENT,
        payload: landingContentMockData,
      })
    })
  })
  it('should console.error() if api request fails.', () => {
    expect.assertions(1)
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    getLandingContent.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return fetchLandingContent()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})
