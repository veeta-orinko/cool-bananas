import request from 'superagent'

export function getImagesByUserId(userId) {
  return request
    .get('/api/v1/collection')
    .send(userId)
    .then((res) => {
      return res.body
    })
}
