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
    return addImageCaption(caption, testDb).then((captions) => {
      console.log('caption console.log: ', caption)
      expect(captions[0]).toBe(10)
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
      console.log('caption console.log: ', image)
      expect(image[0]).toBe(5)
    })
  })
})
