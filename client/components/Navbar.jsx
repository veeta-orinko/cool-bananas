import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenicated'

import { clearUser, setUser } from '../actions/user'
import { getUser } from '../apis/users'

export default function Navbar() {
  const { logout, loginWithRedirect } = useAuth0()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)

  const handleLogOff = (e) => {
    e.preventDefault()
    logout()
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    loginWithRedirect()
  }

  return (
    <nav className='navbar'>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/collection'>My Collection</Link>
      <Link to='/tagged'>Search by tag</Link>
      <Link to='/create'>Create</Link>
      <IfNotAuthenticated>
        <Link to='/' onClick={handleSignIn}>
          Login/Register
        </Link>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <p>{user.name}</p>
        <Link to='/' onClick={handleLogOff}>
          Log out
        </Link>
      </IfAuthenticated>
    </nav>
  )
}
