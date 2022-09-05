import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import Landing from '../Landing'
import { fetchLandingContent } from '../../actions/landing'

const landingContentMockData = {
  captionId: 2,
  captionText: 'mockCaptionText',
  imageId: 2,
  imageUrl: 'mockImageUrl',
}

jest.mock('../../actions/landing')

beforeEach(() => {
  jest.clearAllMocks()
})

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { landing: landingContentMockData }
  }),
}

describe('<Landing />', () => {
  it('displays iamge and caption from redux state.', () => {
    expect.assertions(2)
    render(
      <Provider store={fakeStore}>
        <Landing />
      </Provider>
    )
    const captionText = screen.getByText(landingContentMockData.captionText)
    expect(captionText).toBeTruthy()
    const image = screen.getByRole('img')
    expect(image.src).toMatch(landingContentMockData.imageUrl)
  })
  it('dispatches the fetchLandingContent thunk.', () => {
    expect.assertions(1)
    const fetchLandingContentMockReturn = () => 'mockReturnFunctionsReturnValue'
    fetchLandingContent.mockReturnValue(fetchLandingContentMockReturn)
    render(
      <Provider store={fakeStore}>
        <Landing />
      </Provider>
    )
    expect(fakeStore.dispatch).toHaveBeenCalledWith(
      fetchLandingContentMockReturn
    )
  })
})
