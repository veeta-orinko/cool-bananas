import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Navbar from '../Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@testing-library/jest-dom'

jest.mock('react-redux')

const fakeUser = {
  name: 'BigOlNerd',
  email: 'rohan@devacademy.co.nz',
}

jest.mock('@auth0/auth0-react')
const fakeLogout = jest.fn()

beforeEach(() => {
  useAuth0.mockReturnValue({
    isAuthenticated: true,
    user: {
      ...fakeUser,
    },
    logoutWithRedirect: jest.fn(),
    logout: fakeLogout,
    getAccessTokenSilently: () => {
      return Promise.resolve('token')
    },
  })
})

describe('<Navbar />', () => {
  it('displays log out when user is signed in', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    )
    const navbar = screen.getByTestId('logout')
    expect(navbar).toHaveTextContent('Log out')
  })
  it('displays the username when user is signed in', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    )
    const username = screen.getByTestId('username')
    expect(username).toBeVisible()
  })
  it('Allows a user to log out', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    )
    const link = screen.getByText('Log out')
    fireEvent.click(link)
    expect(fakeLogout).toHaveBeenCalled()
  })
})
