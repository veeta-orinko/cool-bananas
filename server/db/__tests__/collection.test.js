const knex = require('knex')
const { getImagesByUserId } = require('../collection')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getImage', () => {
  it('checks the id, auth0_id, URL and image count', () => {
    const userId = '1'
    expect.assertions(4)
    return getImagesByUserId(userId, testDb).then((images) => {
      expect(images[0].id).toBe(1)
      expect(images[0].auth0_id).toBe('1')
      expect(images[0].image_url).toBe('/images/banana0.png')
      expect(images).toHaveLength(2)
    })
  })
})
