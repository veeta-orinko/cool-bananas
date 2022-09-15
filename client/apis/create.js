import request from 'superagent'

const apiUrl = '/api/v1/create/gif'

//GET /api/v1/create

export function getExternalImages() {
  return request.get(apiUrl).then((res) => {
    console.log(res)
    return res.body
  })
}
