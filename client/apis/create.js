import request from 'superagent'

const apiUrl = '/api/v1/create'

//GET /api/v1/create

export function getExternalImages() {
  return request.get(apiUrl + '/gif').then((res) => {
    return res.body
  })
}

export function addImgCaptionUrl(data) {
  return request
    .post(apiUrl)
    .send(data)
    .then((res) => {
      return res.body
    })
}
