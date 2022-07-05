import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='navbar'>
      HERE IS THE NAVBAR
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/collection'>My Collection</Link>
      <Link to='/create'>Create</Link>
      Register | Login | Log out
    </nav>
  )
}
