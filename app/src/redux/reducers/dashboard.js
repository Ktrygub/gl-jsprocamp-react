import { SET_SEARCH_TERM, SET_FILTER } from '../actionTypes'

const dashboard = (
  state = { searchTerm: '', filter: '', moviesCountPerPage: 6 },
  action
) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm }

    case SET_FILTER:
      return { ...state, filter: action.filter }

    default:
      return state
  }
}

export default dashboard
