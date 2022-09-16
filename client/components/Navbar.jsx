import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenicated'

export default function Navbar() {
  const { logout, loginWithRedirect } = useAuth0()
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
        <Link data-testid='login' to='/' onClick={handleSignIn}>
          Login/Register
        </Link>
      </IfNotAuthenticated>
      <IfAuthenticated>
        <p data-testid='username'>{user?.name}</p>
        <Link data-testid='logout' to='/' onClick={handleLogOff}>
          Log out
        </Link>
      </IfAuthenticated>
    </nav>
  )
}
