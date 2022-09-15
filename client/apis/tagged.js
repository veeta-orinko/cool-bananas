import request from 'superagent'

const rootUrl = '/api/v1/tagged/'

function logError(err) {
  console.error(
    'Error consuming the API (in client/apis/tagged.js):',
    err.message
  )
  throw err
}

export function getImages() {
  return request
    .get(rootUrl)
    .then((res) => res.body)
    .catch(logError)
}

export function getImagesByTag(tag) {
  return request
    .get(`${rootUrl}/${tag}`)
    .then((res) => res.body)
    .catch(logError)
}
