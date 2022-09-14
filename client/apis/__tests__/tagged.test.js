import nock from 'nock'
import { getImages } from '../tagged'
const serverURL = 'http://localhost:3000/api/v1/tagged'

describe('getImages api call', () => {
  it('Returns an array of objects', () => {
    const arrImageData = [
      {
        captionId: 1,
        captionText: 'Banananana',
        imageId: 1,
        imageUrl: '/images/banana0.png',
        tags: 'banana, cool, pyjamas',
      },
      {
        captionId: 2,
        captionText: "When you're a happy banana",
        imageId: 1,
        imageUrl: '/images/banana0.png',
        tags: 'banana, cool, pyjamas',
      },
      {
        captionId: 3,
        captionText: 'Cool bananas',
        imageId: 1,
        imageUrl: '/images/banana0.png',
        tags: 'banana, cool, pyjamas',
      },
    ]

    const scope = nock(serverURL)
      .get('/')
      .reply(200, JSON.stringify(arrImageData), {
        'Content-Type': 'application/json',
      })

    return getImages().then((result) => {
      expect(result).toHaveLength(3)
      expect(scope.isDone()).toBe(true)
    })
  })
})
