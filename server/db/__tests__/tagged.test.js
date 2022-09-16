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

describe('getAllImagesByTag', () => {
  it('returns an array of objects that matches tag parameter', () => {
    return db.getAllImagesByTag('pyjama', testDb).then((array) => {
      expect(array).toHaveLength(4)
      expect(array[0].imageUrl).toBe('/images/banana0.png')
    })
  })
})

describe('getAllImages', () => {
  it('returns an array of objects from the images db', () => {
    return db.getAllImages(testDb).then((array) => {
      expect(array).toHaveLength(9)
      expect(array[0].captionText).toContain('Banananana')
    })
  })
  it('confirms join of captions table to images table', () => {
    return db.getAllImages(testDb).then((array) => {
      let imageCaptionsArray = array.filter((obj) => obj.imageId == 1)
      expect(imageCaptionsArray).toHaveLength(4)
    })
  })
})
