import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers/rootReducer'
import persistedStateDatabase from '../persistedStateDatabase'

const store = createStore(
  rootReducer,
  persistedStateDatabase,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
