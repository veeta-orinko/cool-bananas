//Testing that the server side route responses are correct
const request = require('supertest')
const server = require('../../server')
const checkJwt = require('../../auth0')

const { getUser, getUsers, createUser, userExists } = require('../../db/users')
jest.mock('../../db/users')
jest.mock('../../auth0')
jest.spyOn(console, 'error')

beforeAll(() => {
  checkJwt.mockImplementation((req, res, next) => {
    ;(req.user = { sub: '999' }), next()
  })
})

afterEach(() => {
  console.error.mockReset()
})

const fakeUser = { auth0_id: '999', name: 'JV', email: 'JV@iscool.com' }

describe('GET /api/v1/users/', () => {
  it('returns status 200 and an array of objects when db function resolves', () => {
    getUser.mockReturnValue(Promise.resolve(fakeUser))

    return request(server)
      .get('/api/v1/users')
      .then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.name).toBe('JV')
        expect(getUser).toHaveBeenCalledWith('999')
        return null
      })
  })
  it('returns status 500 and an error message when db function rejects', () => {
    getUser.mockImplementation(() => Promise.reject(new Error('oh dear, sad')))
    return request(server)
      .get('/api/v1/users')
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toBe('oh dear, sad')
        return null
      })
  })
})

// important comments, do not delete 😈 //
// test = { 🤯, 😢 }
// 🍌 = 😊
// 🎃 = 😠
// any questions or comments JV?
