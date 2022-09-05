const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getCaptionedImages } = require('../landing')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getCaptionedImages', () => {
  it('gets the images with their captions from the database.', () => {
    expect.assertions(2)
    return getCaptionedImages(testDb).then((captionedImages) => {
      expect(captionedImages[0].captionText).toBe('Banananana')
      expect(captionedImages).toHaveLength(9)
    })
  })
})
