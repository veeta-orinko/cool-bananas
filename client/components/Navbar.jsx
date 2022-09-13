import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'

import { clearUser, setUser } from '../actions/user'

export default function Navbar() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isAuthenticated, getAccessTokenSilently } = useAuth0()

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(clearUser())
    } else {
      getAccessTokenSilently()
        .then((token) => getUser(token))
        .then((userInDb) => {
          userInDb ? dispatch(setUser(userInDb)) : navigate('/register')
        })
        .catch((err) => console.error(err))
    }
  }, [isAuthenticated])

  return (
    <nav className='navbar'>
      HERE IS THE NAVBAR
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/collection'>My Collection</Link>
      <Link to='/tagged'>Search by tag</Link>
      <Link to='/create'>Create</Link>
      Register | Login | Log out
    </nav>
  )
}
