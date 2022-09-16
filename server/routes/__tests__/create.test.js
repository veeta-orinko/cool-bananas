const request = require('supertest')
const server = require('../../server')

const { addImageCaption, addImageUrl } = require('../../db/create')

jest.mock('../../db/create')

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

const postCaptionedImagestMockData = {
  captionText: 'mockCaptionText1',
  imageUrl: 'mockImageUrl1',
  authId: 'mockId',
  tags: 'mocktags',
}

describe('POST /api/v1/create/', () => {
  test('should return a caption and an id', () => {
    expect.assertions(6)
    addImageUrl.mockReturnValue(Promise.resolve([5]))
    addImageCaption.mockReturnValue(Promise.resolve([10]))
    return request(server)
      .post('/api/v1/create/')
      .send(postCaptionedImagestMockData)
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.id).toBe(10)
        expect(res.body.image_id).toStrictEqual([5])
        expect(res.body.caption_text).toContain('mockCaptionText1')
        expect(addImageCaption).toHaveBeenCalledWith({
          image_id: [5],
          caption_text: 'mockCaptionText1',
          auth0_id: 'mockId',
        })
        expect(addImageUrl).toHaveBeenCalledWith({
          image_url: 'mockImageUrl1',
          tags: 'mocktags',
          auth0_id: 'mockId',
        })
      })
  })

  test('addImageCaption should return a status 500 and an error message', () => {
    expect.assertions(3)

    addImageCaption.mockImplementation(() =>
      Promise.reject(new Error('Test error message'))
    )

    console.error.mockImplementation(() => {})
    return request(server)
      .post('/api/v1/create/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
        expect(console.error).toHaveBeenCalledWith('Test error message')
      })
  })

  test('addImageUrl should return a status 500 and an error message', () => {
    expect.assertions(3)
    addImageUrl.mockImplementation(() =>
      Promise.reject(new Error('Test error message'))
    )

    console.error.mockImplementation(() => {})
    return request(server)
      .post('/api/v1/create/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
        expect(console.error).toHaveBeenCalledWith('Test error message')
      })
  })
})
