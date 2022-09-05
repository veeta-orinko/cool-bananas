const request = require('supertest')
const server = require('../../server')

const { getCaptionedImages } = require('../../db/landing')
jest.mock('../../db/landing')

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

const getCaptionedImagestMockData = [
  {
    captionId: 1,
    captionText: 'mockCaptionText1',
    imageId: 1,
    imageUrl: 'mockImageUrl1',
  },
  {
    captionId: 2,
    captionText: 'mockCaptionText2',
    imageId: 2,
    imageUrl: 'mockImageUrl2',
  },
]

describe('GET /api/v1/landing/', () => {
  it('should return status 200 and one captioned image when database is successful.', () => {
    expect.assertions(2)
    getCaptionedImages.mockReturnValue(
      Promise.resolve(getCaptionedImagestMockData)
    )
    return request(server)
      .get('/api/v1/landing/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(getCaptionedImagestMockData).toContainEqual(res.body)
      })
  })
  it('should return status 500 and an error message when database fails.', () => {
    expect.assertions(3)
    getCaptionedImages.mockImplementation(() =>
      Promise.reject(new Error('Something went wrong'))
    )
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/landing/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
        expect(console.error).toHaveBeenCalledWith('Something went wrong')
      })
  })
})
