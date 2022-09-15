//require db in
const knex = require('knex')
const config = require('../knexfile')
const testDb = knex(config.test)

const { addImageCaption, addImageUrl } = require('../create.js')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('addImageCaption', () => {
  test('adds an image caption', () => {
    const caption = { image_id: 1, auth0_id: 2, caption_text: 'caption text' }
    return addImageCaption(caption, testDb)
      .then(() => {
        return testDb('captions').select()
      })
      .then((captions) => {
        expect(captions).toHaveLength(10)
        expect(captions[9].image_id).toBe(1)
        expect(captions[9].caption_text).toBe('caption text')
      })
  })
})

describe('addImageUrl', () => {
  test('adds an image url', () => {
    const url = {
      auth0_id: 2,
      image_url: 'https://i.imgur.com/yXwNrUV.jpeg',
      tags: 'comic strip',
    }
    return addImageUrl(url, testDb).then((image) => {
      expect(image).toBe(5)
    })
  })
})
