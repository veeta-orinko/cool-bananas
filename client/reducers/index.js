import { combineReducers } from 'redux'

import landing from './landing'
import user from './user'
import dashboard from './dashboard'
import collection from './collection'

export default combineReducers({
  landing: landing,
  user: user,
  dashboard: dashboard,
  collection: collection,
})
