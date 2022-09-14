const request = require('supertest')
const server = require('../../server')

const { getAllImagesByTag } = require('../../db/tagged')
jest.mock('../../db/tagged')

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

describe('GET /api/v1/tagged/:tag', () => {
  const fakeObjectArray = [
    {
      id: 1,
      auth0_id: '1',
      image_url: '/images/banana0.png',
      tags: 'banana, coolio, pyjamas',
    },
    {
      id: 2,
      auth0_id: '1',
      image_url:
        'https://pbs.twimg.com/media/ErKJ6RwVgAE06ET?format=jpg&name=small',
      tags: 'coolio, Yu-Gi-Oh, finger',
    },
  ]
  it('returns status 200 and an array of objects when db function resolves', () => {
    getAllImagesByTag.mockReturnValue(Promise.resolve(fakeObjectArray))
    return request(server)
      .get('/api/v1/tagged/coolio')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body).toHaveLength(2)
        expect(res.body[0].image_url).toBe('/images/banana0.png')
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
