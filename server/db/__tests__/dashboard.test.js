const knex = require('knex')
const testConfig = require('../knexfile').test
const testDb = knex(testConfig)

const { getAllCaptionedImages } = require('../dashboard')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('geAllCaptionedImages', () => {
  it('gets all  the images with their captions from the database.', () => {
    expect.assertions(5)
    return getAllCaptionedImages(testDb).then((captionedImages) => {
      expect(captionedImages[0].captionText).toBe('Banananana')
      expect(captionedImages).toHaveLength(9)
      expect(captionedImages[0].auth0ImageId).toBe('1')
      expect(captionedImages[1].imageId).toBe(1)
      expect(captionedImages[1].captionText).toBe(`When you're a happy banana`)
    })
  })
})
