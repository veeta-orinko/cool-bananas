const knex = require('knex')
const config = require('../knexfile').test
const testDb = knex(config)

const db = require('../tagged')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('getAllByTag', () => {
  it('returns an array of objects that matches tag parameter', () => {
    return db.getAllByTag('cool', testDb).then((array) => {
      expect(array).toHaveLength(9)
      expect(array[0].imageUrl).toBe('/images/banana0.png')
    })
  })
  it('confirms join of captions table to images table', () => {
    return db.getAllByTag('cool', testDb).then((array) => {
      let imageCaptionsArray = array.filter((obj) => obj.imageId == 1)
      expect(imageCaptionsArray).toHaveLength(4)
    })
  })
})
