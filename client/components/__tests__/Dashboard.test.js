import React from 'react'
import { Provider } from 'react-redux'
import { screen, render, fireEvent } from '@testing-library/react'
import Dashboard from '../Dashboard'
import { fetchDashboardContent } from '../../actions/dashboard'
const dashboardContentMockData = [
  {
    imageId: 1,
    auth0ImageId: '1',
    captionId: 1,
    imageUrl: '/mockImageUrl',
    captionText: 'mockCaptionText',
  },
  {
    imageId: 3,
    auth0ImageId: '3',
    captionId: 3,
    imageUrl: '/mockImageUrl3',
    captionText: 'mockCaptionText3',
  },
]

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
    const captionText = screen.getByText(
      dashboardContentMockData[0].captionText
    )
    expect(captionText).toBeTruthy()
    const image = screen.getByRole('img')
    expect(image.src).toMatch(dashboardContentMockData[0].imageUrl)
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

  it('changes image index when forward and back button is clicked', () => {
    expect.assertions(1)
    render(
      <Provider store={fakeStore}>
        <Dashboard />
      </Provider>
    )
    const imageUrl = screen.getByRole('img').src

    const button = screen.getByRole('button', { name: '⫷' })
    fireEvent.click(button, { shiftKey: true })
    const newImageUrl = screen.getByRole('img').src
    expect(newImageUrl).not.toBe(imageUrl)
  })
})
