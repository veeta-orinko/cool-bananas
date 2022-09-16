import { combineReducers } from 'redux'

import landing from './landing'
import user from './user'
import dashboard from './dashboard'
import tagged from './tagged'
<<<<<<< HEAD
import tagged from './tagged'
=======
import dashboard from './dashboard'
>>>>>>> dev


<<<<<<< HEAD
  tagged: tagged,
=======
  dashboard: dashboard,
>>>>>>> dev
export default combineReducers({
  landing: landing,
  user: user,
  tagged: tagged,
  dashboard: dashboard
})
