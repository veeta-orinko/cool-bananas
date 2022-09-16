//Testing that the server side route responses are correct
const request = require('supertest')
const server = require('../../server')
const checkJwt = require('../../auth0')

const { getUser, createUser, userExists } = require('../../db/users')
jest.mock('../../db/users')
jest.mock('../../auth0')
jest.spyOn(console, 'error')

beforeEach(() => {
  checkJwt.mockImplementation((req, res, next) => {
    ;(req.user = { sub: '999' }), next()
  })
})

afterEach(() => {
  console.error.mockReset()
})
const fakestUser = { name: 'JV', email: 'JV@iscool.com' }
const fakeUser = { ...fakestUser, auth0_id: '999' }

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
  it('returns status 400 when user auth0Id does not exist', () => {
    checkJwt.mockImplementation((req, res, next) => {
      next()
    })
    return request(server)
      .get('/api/v1/users')
      .then((res) => {
        expect(res.status).toBe(400)
      })
  })
})

//Adds a new user to the database
describe('POST /api/v1/users/', () => {
  it('returns status 200 and the new index number when db function resolves', () => {
    userExists.mockReturnValue(Promise.resolve(false))
    createUser.mockReturnValue(Promise.resolve([5]))
    return request(server)
      .post('/api/v1/users')
      .send(fakestUser)
      .then((res) => {
        expect(res.status).toBe(201)
        return null
      })
  })
  it('returns status 500 and an error message when db function rejects', () => {
    userExists.mockReturnValue(Promise.resolve(false))
    createUser.mockImplementation(() =>
      Promise.reject(new Error('oh dear, sad'))
    )
    return request(server)
      .post('/api/v1/users')
      .send(fakestUser)
      .then((res) => {
        expect(res.status).toBe(500)
        expect(res.text).toBe('oh dear, sad')
        return null
      })
  })
  it('returns status 403 and an error message when db function rejects', () => {
    userExists.mockReturnValue(Promise.resolve(true))
    return request(server)
      .post('/api/v1/users')
      .send(fakestUser)
      .then((res) => {
        expect(res.status).toBe(403)
        expect(res.text).toBe('Username Taken')
        return null
      })
  })
})

// important comments, do not delete 😈 //
// test = { 🤯, 😢 }
// 🍌 = 😊
// 🎃 = 😠
// any questions or comments JV?
