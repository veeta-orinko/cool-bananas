import nock from 'nock'
import { getUser, addUser } from '../users'

const fakeUser = {
  name: 'BigNerd',
  auth0Id: 'qwerty1234',
  email: 'rohan@devacademy.co.nz',
}
const fakeToken = 'someToken'

jest.spyOn(console, 'error')

afterEach(() => {
  console.error.mockReset()
})

describe('GET /api/v1/users', () => {
  it('gets the user object', () => {
    const scope = nock('http://localhost')
      .get('/api/v1/users')
      .reply(200, { ...fakeUser, token: fakeToken })

    return getUser().then((user) => {
      expect(user).toEqual({ ...fakeUser, token: fakeToken })
      expect(scope.isDone()).toBeTruthy()
    })
  })
})

describe('POST /api/v1/users', () => {
  it('posts a user object', () => {
    const scope = nock('http://localhost').post('/api/v1/users').reply(201)

    return addUser(fakeUser, fakeToken).then(() => {
      expect(scope.isDone()).toBeTruthy()
    })
  })
  it('fails to post a user (name conflict) and sends appropriate message', () => {
    const scope = nock('http://localhost')
      .post('/api/v1/users')
      .reply(403, 'Username Taken')
    let error = null
    return addUser(fakeUser, fakeToken)
      .catch((e) => {
        error = e
      })
      .finally(() => {
        expect(error).not.toBeNull()
        expect(error.message).toBe(
          'User already exists - please choose another'
        )
        expect(scope.isDone()).toBeTruthy()
      })
  })
  it('fails to post a user object and sends server error', () => {
    const scope = nock('http://localhost').post('/api/v1/users').reply(500)
    let error = null
    return addUser(fakeUser, fakeToken)
      .catch((e) => {
        error = e
      })
      .finally(() => {
        expect(error).not.toBeNull()
        expect(error.message).toBe('Internal Server Error')
        expect(scope.isDone()).toBeTruthy()
        expect(console.error).toHaveBeenCalledWith(
          'Error consuming the API (in client/apis/users.js):'
        )
      })
  })
})
