import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch } from 'react-redux'
import { clearUser, setUser } from './actions/user'
import { getUser } from './apis/users'

// eslint-disable-next-line no-unused-vars
export function useCacheUser() {
  const dispatch = useDispatch()

  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()
  const navigate = useNavigate()

  useEffect(() => {
    let tempToken = null
    if (!isAuthenticated) {
      dispatch(clearUser())
    } else {
      getAccessTokenSilently()
        .then((token) => {
          tempToken = token
          return getUser(token)
        })
        .then((userInDb) => {
          if (userInDb) {
            dispatch(setUser({ ...userInDb, token: tempToken }))
          } else {
            dispatch(
              setUser({
                auth0Id: user?.sub,
                email: user?.email,
                token: tempToken,
              })
            )
            navigate('/register')
          }
        })
        .catch((err) => console.error(err))
    }
  }, [isAuthenticated])
}
