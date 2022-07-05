import request from 'superagent'

const rootUrl = '/api/v1'

// GET /api/v1/landing
export function getLandingContent() {
  return request.get(rootUrl + '/landing')
    .then(res => {
      return res.body
    })
}
