const db = require('../../db/collection')
const request = require('supertest')
const server = require('../../server')

jest.mock('../../db/collection')

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
        // image url matches apple.png
      })
  })
})
