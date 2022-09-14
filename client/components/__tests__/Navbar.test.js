import React from 'react'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { screen, render } from '@testing-library/react'
import Navbar from '../Navbar'

jest.mock('@auth0/auth0-react')
jest.mock('react-redux')

const fakeUser = {
  name: 'big nerd',
  email: 'rohanfowlerharper@devacademy.co.nz',
}

describe('<Navbar />', () => {
  it('displays login when user is signed out', () => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user: {
        ...fakeUser,
      },
      getAccessTokenSilently: () => {
        return Promise.resolve('token')
      },
    })
    // useAuth0.getAccessTokenSilently.mockReturnValue(Promise.resolve('token')),

    render(<Navbar />)
    const navbar = screen.getByRole('nav')
    expect(navbar).toHaveTextContent('Login')
  })
})
// 🍌🐒
