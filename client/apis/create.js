import request from 'superagent'

const apiUrl = 'https://picsum.photos/seed/picsum/600/300'

//GET /api/v1/create

export function getExternalImages() {
  return request.get(apiUrl).then((res) => {
    console.log(res.req.url)
    return res.req.url
  })
}
