const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./tagged')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getAllByTag', () => {
  it('returns an array of objects', () => {
    return db.getAllByTag('cool', testDb).then((array) => {
      expect(array).toHaveLength(3)
      expect(array[0].image_url).toBe('/images/banana0.png')
    })
  })
})
