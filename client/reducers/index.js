import { combineReducers } from 'redux'

import landing from './landing'
import user from './user'

export default combineReducers({
  landing: landing,
  user: user
})
