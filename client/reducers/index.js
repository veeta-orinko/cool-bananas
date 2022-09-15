import { combineReducers } from 'redux'

import landing from './landing'
import user from './user'
import tagged from './tagged'

export default combineReducers({
  landing: landing,
  user: user,
  tagged: tagged,
})
