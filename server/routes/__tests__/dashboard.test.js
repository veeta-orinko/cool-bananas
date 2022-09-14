const request = require('supertest')
const server = require('../../server')

const { getAllCaptionedImages } = require('../../db/dashboard')
jest.mock('../../db/dashboard')

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

const getAllCaptionedImagestMockData = [
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

describe('GET /api/v1/dashboard/', () => {
  it('should return status 200 and one captioned image when database is successful.', () => {
    expect.assertions(3)
    getAllCaptionedImages.mockReturnValue(
      Promise.resolve(getAllCaptionedImagestMockData)
    )
    return request(server)
      .get('/api/v1/dashboard/')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(getAllCaptionedImagestMockData[0].imageUrl).toContain(
          'mockImageUrl1'
        )
        expect(getAllCaptionedImagestMockData[1].captionText).toContain(
          'mockCaptionText2'
        )
      })
  })

  it('should return status 500 and an error message when database fails.', () => {
    expect.assertions(3)
    getAllCaptionedImages.mockImplementation(() =>
      Promise.reject(new Error('Good proof this is working'))
    )
    console.error.mockImplementation(() => {})
    return request(server)
      .get('/api/v1/dashboard/')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toContain('Something went wrong')
        expect(console.error).toHaveBeenCalledWith('Good proof this is working')
      })
  })
})
