import nock from 'nock'
import { getDashboardContent } from '../dashboard'

const dashboardContentMockData = [
  {
    imageId: 1,
    auth0ImageId: '1',
    captionId: 1,
    imageUrl: '/mockImageUrl',
    captionText: 'mockCaptionText',
  },
  {
    imageId: 3,
    auth0ImageId: '3',
    captionId: 3,
    imageUrl: '/mockImageUrl3',
    captionText: 'mockCaptionText3',
  },
]

describe('GET /api/v1/dashboard', () => {
  it('gets the dashboard page content', async () => {
    expect.assertions(1)
    const scope = nock('http://localhost')
      .get('/api/v1/dashboard')
      .reply(200, dashboardContentMockData)

    const dashboardContent = await getDashboardContent()
    expect(dashboardContent).toEqual(dashboardContentMockData)
    scope.done()
  })
})
