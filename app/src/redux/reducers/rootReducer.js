import { combineReducers } from 'redux'

import dashboardSearch from './dashboardSearch'
import database from './database'

const rootReducer = combineReducers({ dashboardSearch, database })

export default rootReducer
