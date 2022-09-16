import React from 'react'
import { Provider } from 'react-redux'
import { screen, render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Tagged from '../Tagged'
import { fetchImages } from '../../actions/tagged'

const arrImageData = [
  {
    captionId: 1,
    captionText: 'Banananana',
    imageId: 1,
    imageUrl: '/images/banana2.png',
    tags: 'banana, amazing, pyjamas',
  },
  {
    captionId: 2,
    captionText: "When you're a happy banana",
    imageId: 1,
    imageUrl: '/images/banana1.png',
    tags: 'banana, amazing, finger',
  },
  {
    captionId: 3,
    captionText: 'Cool bananas',
    imageId: 1,
    imageUrl: '/images/banana0.png',
    tags: 'banana, cool, finger',
  },
]

jest.mock('../../actions/tagged')

beforeEach(() => {
  jest.clearAllMocks()
})

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => {
    return { tagged: arrImageData }
  }),
}

describe('<Tagged />', () => {
  it('displays images and captions from redux state.', () => {
    expect.assertions(2)
    render(
      <Provider store={fakeStore}>
        <Router>
          <Tagged />
        </Router>
      </Provider>
    )
    const captionText = screen.getByText(arrImageData[0].captionText)
    expect(captionText).toBeTruthy()
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('dispatches the fetchImages thunk.', () => {
    expect.assertions(1)
    const fetchImagesMockReturn = () => 'this is anon function'
    fetchImages.mockReturnValue(fetchImagesMockReturn)
    render(
      <Provider store={fakeStore}>
        <Router>
          <Tagged />
        </Router>
      </Provider>
    )
    expect(fakeStore.dispatch).toHaveBeenCalledWith(fetchImagesMockReturn)
  })
})
