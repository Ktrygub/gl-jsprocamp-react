import { SET_SEARCH_TERM, ADD_MOVIE, ADD_INIT_MOVIES } from '../actionTypes'

// action creators
export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  searchTerm
})
export const addMovie = movie => ({ type: ADD_MOVIE, movie })
export const addInitMovies = movies => ({ type: ADD_INIT_MOVIES, movies })


// dispatchers
export const handleSearchTermChange = event => dispatch =>
  dispatch(setSearchTerm(event.target.value))

export const submitMovie = movie => dispatch => dispatch(addMovie(movie))
