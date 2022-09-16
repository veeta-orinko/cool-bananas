import { fetchDashboardContent, SET_DASHBOARD_CONTENT } from '../dashboard'
import { getDashboardContent } from '../../apis/dashboard'

jest.mock('../../apis/dashboard')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

const dashboardContentMockData = {
  captionId: 2,
  captionText: 'mockCaptionText',
  imageId: 2,
  imageUrl: 'mockImageUrl',
}

describe('fetchDashboardContent', () => {
  it('dispatches the SET_DASHBOARD_CONTENT action.', () => {
    getDashboardContent.mockReturnValue(
      Promise.resolve(dashboardContentMockData)
    )
    return fetchDashboardContent()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_DASHBOARD_CONTENT,
        payload: dashboardContentMockData,
      })
    })
  })
  it('should console.error() if api request fails.', () => {
    expect.assertions(1)
    jest.spyOn(console, 'error')
    console.error.mockImplementation(() => {})
    getDashboardContent.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    return fetchDashboardContent()(fakeDispatch).then(() => {
      expect(console.error).toHaveBeenCalledWith('Something went wrong')
    })
  })
})
