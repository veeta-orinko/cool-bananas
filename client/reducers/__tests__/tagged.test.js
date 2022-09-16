import { SET_IMAGES } from '../../actions/tagged'
import tagged from '../tagged'

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

describe('tagged reducer', () => {
  it('returns the action payload for type SET_IMAGES.', () => {
    const action = {
      type: SET_IMAGES,
      payload: arrImageData,
    }
    const initialState = []
    const expectedState = arrImageData

    const outputState = tagged(initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns the default initial state for an undefined state and no action type.', () => {
    const expectedState = []
    const outputState = tagged(undefined, {})

    expect(outputState).toEqual(expectedState)
  })
})
