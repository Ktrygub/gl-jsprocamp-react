import { SET_SEARCH_TERM } from '../actionTypes'

const dashboardSearch = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.searchTerm
  }
  return state
}

export default dashboardSearch
