import nock from 'nock'
import { getImages, getImagesByTag } from '../tagged'
const serverURL = '/api/v1/tagged/'

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

const scope = nock('http://localhost')

describe('getImages api call', () => {
  it('Returns an array of objects', () => {
    expect.assertions(2)

    scope.get(serverURL).reply(200, arrImageData)

    return getImages().then((result) => {
      expect(result).toHaveLength(3)
      expect(scope.isDone()).toBe(true)
    })
  })
})

describe('getImagesByTag api call', () => {
  it('Returns an array of objects that match the tag parameter', () => {
    expect.assertions(2)

    const tag = 'finger'

    // understood that this below variable is not necessary
    // wanted to 'mock' a db function to get realistic return value for our api call
    const imagesByTag = arrImageData.filter((obj) =>
      obj.tags.split(',').find((word) => word === ` ${tag}`)
    )

    scope.get(`${serverURL}/${tag}`).reply(200, imagesByTag)

    return getImagesByTag(tag).then((result) => {
      console.log(imagesByTag)
      expect(result).toHaveLength(2)
      expect(scope.isDone()).toBe(true)
    })
  })
})
