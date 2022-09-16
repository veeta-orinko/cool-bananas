import nock from 'nock'
import { getExternalImages, addImgCaptionUrl } from '../create'

describe('create api', () => {
  it('returns data from giphy api', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/create/gif')
      .reply(200, { data: 'testing data' })
    // console.log(scope)
    return getExternalImages().then((result) => {
      // console.log(result)
      expect(result).toEqual({ data: 'testing data' })
      expect(scope.isDone()).toBe(true)
    })
  })

  it('calls addImg and returns image data', () => {
    const scope = nock('http://localhost')
      .post('/api/v1/create')
      .reply(200, { data: 'testing data' })
    const data = { data: 'test' }
    return addImgCaptionUrl(data).then((result) => {
      expect(result).toEqual({ data: 'testing data' })
      expect(scope.isDone()).toBe(true)
    })
  })
})
