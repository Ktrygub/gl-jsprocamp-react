import {
  SET_SEARCH_TERM,
  SET_FILTER,
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  ADD_INIT_MOVIES
} from '../actionTypes'

// action creators
export const setSearchTermAction = searchTerm => ({
  type: SET_SEARCH_TERM,
  searchTerm
})

export const setFilterAction = filter => ({
  type: SET_FILTER,
  filter
})

export const addMovieAction = movie => ({ type: ADD_MOVIE, movie })

export const editMovieAction = (imdbID, newMovie) => ({
  type: EDIT_MOVIE,
  imdbID,
  newMovie
})

export const deleteMovieAction = imdbID => ({ type: DELETE_MOVIE, imdbID })

export const addInitMoviesAction = movies => ({ type: ADD_INIT_MOVIES, movies })

// dispatchers
export const handleSearchTermChange = value => dispatch =>
  dispatch(setSearchTermAction(value))

export const setFilter = value => dispatch =>
  dispatch(setFilterAction(value))

export const addMovie = movie => dispatch => dispatch(addMovieAction(movie))

export const editMovie = (imdbID, newMovie) => dispatch =>
  dispatch(editMovieAction(imdbID, newMovie))

export const deleteMovie = imdbID => dispatch =>
  dispatch(deleteMovieAction(imdbID))
