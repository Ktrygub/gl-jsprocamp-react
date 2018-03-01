import { combineReducers } from 'redux'

import dashboard from './dashboard'
import database from './database'

const rootReducer = combineReducers({ dashboard, database })

export default rootReducer
