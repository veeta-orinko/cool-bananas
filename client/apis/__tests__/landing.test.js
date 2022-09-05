import nock from 'nock'
import { getLandingContent } from '../landing'

const landingContentMockData = {
  captionId: 2,
  captionText: 'mockCaptionText',
  imageId: 2,
  imageUrl: 'mockImageUrl',
}

describe('GET /api/v1/landing', () => {
  it('gets the landing page content', async () => {
    expect.assertions(1)
    const scope = nock('http://localhost')
      .get('/api/v1/landing')
      .reply(200, landingContentMockData)

    const landingContent = await getLandingContent()
    expect(landingContent).toEqual(landingContentMockData)
    scope.done()
  })
})
