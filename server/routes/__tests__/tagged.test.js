const request = require('supertest')
const server = require('../../server')

const { getAllImagesByTag, getAllImages } = require('../../db/tagged')
jest.mock('../../db/tagged')

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

const fakeObjectArray = [
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
    tags: 'banana, pyjamas',
  },
  {
    captionId: 3,
    captionText: 'Cool bananas',
    imageId: 1,
    imageUrl: '/images/banana0.png',
    tags: 'banana, cool, pyjamas',
  },
]

describe('GET /api/v1/tagged/:tag', () => {
  it('returns status 200 and an array of objects when db function resolves', () => {
    getAllImagesByTag.mockReturnValue(Promise.resolve(fakeObjectArray))
    return request(server)
      .get('/api/v1/tagged/coolio')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toHaveLength(3)
        expect(res.body[0].imageUrl).toBe('/images/banana0.png')
        expect(res.body[2].captionText).toBe('Cool bananas')
        return null
      })
  })
  it('returns status 500 and an error message when db function rejects', () => {
    getAllImagesByTag.mockImplementation(() =>
      Promise.reject(new Error('oh dear, sad'))
    )
    return request(server)
      .get('/api/v1/tagged/coolio')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toBe('oh dear, sad')
        return null
      })
  })
})

describe('GET /api/v1/tagged/', () => {
  it('returns status 200 and an array of objects when db function resolves', () => {
    getAllImages.mockReturnValue(Promise.resolve(fakeObjectArray))
    return request(server)
      .get('/api/v1/tagged/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toHaveLength(3)
        expect(res.body[0].imageUrl).toBe('/images/banana0.png')
        expect(res.body[2].captionText).toBe('Cool bananas')
        return null
      })
  })
  it('returns status 500 and an error message when db function rejects', () => {
    getAllImages.mockImplementation(() =>
      Promise.reject(new Error('Golly gee-wizz, I am sad'))
    )
    return request(server)
      .get('/api/v1/tagged/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toBe('Golly gee-wizz, I am sad')
        return null
      })
  })
})
