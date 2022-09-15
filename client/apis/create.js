import request from 'superagent'

const apiUrl = 'https://picsum.photos/v2/list'

//GET /api/v1/create

export function getExternalImages() {
  return request.get(apiUrl).then((res) => {
    console.log(res)
    return res.body
  })
}
