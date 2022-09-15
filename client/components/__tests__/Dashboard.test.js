import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import Dashboard from '../Dashboard'
import { fetchDashboardContent } from '../../actions/dashboard'

const dashboardContentMockData = {
  imageId: 1,
  auth0ImageId: '1',
  captionId: 1,
  imageUrl: '/mockImageUrl',
  captionText: 'mockCaptionText',
}

jest.mock('../../actions/dashboard')

beforeEach(() => {
  jest.clearAllMocks()
})

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { dashboard: dashboardContentMockData }
  }),
}

describe('<Dashboard />', () => {
  it('displays image and caption from redux state.', () => {
    expect.assertions(2)
    render(
      <Provider store={fakeStore}>
        <Dashboard />
      </Provider>
    )
    const captionText = screen.getByText(dashboardContentMockData.captionText)
    expect(captionText).toBeTruthy()
    const image = screen.getByRole('img')
    expect(image.src).toMatch(dashboardContentMockData.imageUrl)
  })
  it('dispatches the fetchDashboardContent thunk.', () => {
    expect.assertions(1)
    const fetchDashboardContentMockReturn = () =>
      'mockReturnFunctionsReturnValue'
    fetchDashboardContent.mockReturnValue(fetchDashboardContentMockReturn)
    render(
      <Provider store={fakeStore}>
        <Dashboard />
      </Provider>
    )
    expect(fakeStore.dispatch).toHaveBeenCalledWith(
      fetchDashboardContentMockReturn
    )
  })
})
