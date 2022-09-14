import { SET_USER, CLEAR_USER, setUser, clearUser } from '../user'
import { getUser, addUser } from '../../apis/users'

jest.mock('../../apis/users')

const fakeDispatch = jest.fn()

beforeEach(() => {
  jest.clearAllMocks()
})

const fakeUser = {
  name: 'BigNerd',
  auth0Id: 'qwerty1234',
  email: 'rohan@devacademy.co.nz',
  token: 'someToken',
}

describe('getUser', () => {
  it('sets the current user upon login', () => {
    getUser.mockReturnValue(Promise.resolve(fakeUser))
    return setUser()(fakeDispatch).then(() => {
      expect(fakeDispatch).toHaveBeenCalledWith({
        type: SET_USER,
        payload: fakeUser,
      })
    })
  })
  // it('should console.error() if api request fails.', () => {
  //   expect.assertions(1)
  //   jest.spyOn(console, 'error')
  //   console.error.mockImplementation(() => {})
  //   getUser.mockImplementation(() =>
  //     Promise.reject(new Error('Something went wrong'))
  //   )
  //   return getUser()(fakeDispatch).then(() => {
  //     expect(console.error).toHaveBeenCalledWith('Something went wrong')
  //   })
  // })
})
