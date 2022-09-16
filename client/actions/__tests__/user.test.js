import { SET_USER, CLEAR_USER, setUser, clearUser } from '../user'

const fakeUser = {
  name: 'BigNerd',
  auth0Id: 'qwerty1234',
  email: 'rohan@devacademy.co.nz',
  token: 'someToken',
}

describe('setUser', () => {
  it('sets the current user upon login', () => {
    const result = setUser(fakeUser)
    expect(result.type).toBe(SET_USER)
    expect(result.payload.name).toBe('BigNerd')
  })
})

describe('clearUser', () => {
  it('clears the user upon logout', () => {
    const result = clearUser(fakeUser)
    expect(result.type).toBe(CLEAR_USER)
    expect(result.payload).toBeUndefined()
  })
})
