import { combineReducers } from 'redux'

import landing from './landing'
import user from './user'
import dashboard from './dashboard'
import tagged from './tagged'

export default combineReducers({
  landing: landing,
  user: user,
  tagged: tagged,
  dashboard: dashboard,
})
