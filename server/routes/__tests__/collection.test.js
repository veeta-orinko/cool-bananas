const db = require('../../db/collection')
const request = require('supertest')
const server = require('../../server')

jest.mock('../../db/collection')

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

describe('GET /api/v1/collection', () => {
  test('gets correct images', () => {
    db.getImagesByUserId.mockReturnValue(
      Promise.resolve([
        {
          id: 1,
          auth0_id: '1',
          image_url: '/images/apple.png',
          tags: 'banana, cool, pyjamas',
        },
        {
          id: 2,
          auth0_id: '1',
          image_url: '/images/orange.png',
          tags: 'cool, Yu-Gi-Oh, finger',
        },
      ])
    )
    return request(server)
      .get('/api/v1/collection')
      .then((response) => {
        expect(response.body).toHaveLength(2)
        expect(response.body[0].image_url).toBe('/images/apple.png')
      })
  })
  test('should return status 500 and an error message when database fails.', () => {
    expect.assertions(3)
    db.getImagesByUserId.mockImplementation(() =>
      Promise.reject(new Error('Test error message'))
    )
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/collection/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Server error')
        expect(console.error).toHaveBeenCalledWith('Test error message')
      })
  })
})
