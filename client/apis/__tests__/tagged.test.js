import nock from 'nock'
import { getImages } from '../tagged'
const serverURL = '/api/v1/tagged/'

describe('getImages api call', () => {
  it('Returns an array of objects', async () => {
    expect.assertions(2)

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

    const scope = nock('http://localhost')
      .get(serverURL)
      .reply(200, arrImageData)

    return getImages().then((result) => {
      expect(result).toHaveLength(3)
      expect(scope.isDone()).toBe(true)
    })
  })
})
