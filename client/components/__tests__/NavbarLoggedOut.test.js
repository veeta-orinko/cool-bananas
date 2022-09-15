import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Navbar from '../Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@testing-library/jest-dom'

const fakeUser = {
  name: 'BigOlNerd',
  email: 'rohan@devacademy.co.nz',
}

const fakeStore = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(),
}

jest.mock('@auth0/auth0-react')
const fakeLogin = jest.fn()

beforeEach(() => {
  useAuth0.mockReturnValue({
    isAuthenticated: false,
    user: {
      ...fakeUser,
    },
    loginWithRedirect: fakeLogin,
    getAccessTokenSilently: () => {
      return Promise.resolve('token')
    },
  })
})

describe('<Navbar />', () => {
  it('displays login/register when user is signed out', () => {
    fakeStore.getState.mockImplementation(() => {
      return {
        user: {
          name: 'bob',
          token: '1',
        },
      }
    })
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Navbar />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    )
    const navbar = screen.getByTestId('login')
    expect(navbar).toHaveTextContent('Login/Register')
  })
  it('Allows a user to log in', () => {
    render(
      <Provider store={fakeStore}>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<Navbar />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    )
    const link = screen.getByText('Login/Register')
    fireEvent.click(link)
    expect(fakeLogin).toHaveBeenCalled()
  })
})

// ⌨️🐒 monkey do test, monkey happy, get banana 🍌
