import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'

import { clearUser, setUser } from '../actions/user'
import { getUser } from '../apis/users'

const isAuthenticated = () => {
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}

const dispatch = useDispatch()
const navigate = useNavigate()
const { getAccessTokenSilently } = useAuth0()
//i cry every time

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

export function IfAuthenticated({ children }) {
  return isAuthenticated() ? <>{children}</> : null
}

export function IfNotAuthenticated({ children }) {
  return !isAuthenticated() ? <>{children}</> : null
}
