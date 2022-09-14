import { getUser } from '../apis/landing'

export const SET_USER = 'SET_USER'
export const CLEAR_USER = 'CLEAR_USER'

export function setUser(user) {
  return {
    type: SET_USER,
    payload: user,
  }
}

export function clearUser() {
  return {
    type: CLEAR_USER,
  }
}

// export function fetchUser() {
//   return (dispatch) => {
//     return getUser()
//       .then((user) => {
//         dispatch(setUser(user))
//         return null
//       })
//       .catch((error) => {
//         console.error(error.message)
//       })
//   }
// }
