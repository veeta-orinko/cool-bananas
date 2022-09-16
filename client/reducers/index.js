import { combineReducers } from 'redux'

import landing from './landing'
import user from './user'
import collection from './collection'

export default combineReducers({
  landing: landing,
  user: user,
  collection: collection,
})
