import { SET_USER, CLEAR_USER } from '../../actions/user'
import user from '../user'

const fakeUser = {
  name: 'BigOlNerd',
  auth0Id: 'qwerty1234',
  email: 'rohan@devacademy.co.nz',
  token: 'tokenwoooooo',
}

const initialState = {
  name: '',
  auth0Id: '',
  email: '',
  token: '',
}

describe('user reducer', () => {
  it('returns the updated state for type SET_USER', () => {
    const action = {
      type: SET_USER,
      payload: fakeUser,
    }

    const expectedState = fakeUser
    const outputState = user(initialState, action)

    expect(outputState).toEqual(expectedState)
    expect(outputState).not.toBe(initialState)
  })
  it('returns the default initial state for an undefined state and no action type', () => {
    const outputState = user(undefined, {})

    expect(outputState).toEqual(initialState)
  })
  it('returns the initial state when type clear user', () => {
    const action = {
      type: CLEAR_USER,
    }
    const outputState = user(fakeUser, action)
    expect(outputState).toEqual(initialState)
  })
})
