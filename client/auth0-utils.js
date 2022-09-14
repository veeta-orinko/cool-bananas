import { useDispatch, useSelector } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import { setUser } from './actions/user'

// eslint-disable-next-line no-unused-vars
export function useCacheUser() {
  const dispatch = useDispatch()
  const tokenInRedux = useSelector((state) => Boolean(state.user?.token))

  const { isAuthenticated, getAccessTokenSilently, user } = useAuth0()

  if (isAuthenticated && !tokenInRedux) {
    getAccessTokenSilently()
      .then((token) => {
        const userToSave = {
          auth0Id: user?.sub,
          email: user?.email,
          token,
        }
        dispatch(setUser(userToSave))
      })
      .catch((err) => console.error(err))
  }
}
