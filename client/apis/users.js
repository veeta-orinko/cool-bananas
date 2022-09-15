import request from 'superagent'

const rootUrl = '/api/v1'

export function getUser(token) {
  return request
    .get(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${token}`)
    .then((res) => res.body)
    .catch(logError)
}

export function addUser(user, token) {
  return request
    .post(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${token}`)
    .send(user)
    .catch(logError)
}

function logError(err) {
  if (err.response.text === 'Username Taken') {
    throw new Error('User already exists - please choose another')
  } else if (err.message === 'Forbidden') {
    throw new Error('Invalid permissions')
  } else {
    // eslint-disable-next-line no-console
    console.error('Error consuming the API (in client/apis/users.js):')
    throw err
  }
}
