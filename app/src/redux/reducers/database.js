import {
  ADD_MOVIE,
  EDIT_MOVIE,
  DELETE_MOVIE,
  ADD_INIT_MOVIES
} from '../actionTypes'

const database = (state = {}, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      if (state.movies.some(movie => movie.imdbID === action.movie.imdbID)) {
        return state
      }
      return { ...state, movies: [action.movie, ...state.movies] }

    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map(
          movie => (movie.imdbID === action.imdbID ? action.newMovie : movie)
        )
      }

    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.imdbID !== action.imdbID)
      }

    case ADD_INIT_MOVIES:
      return { ...state, movies: action.movies }
    default:
      return state
  }
}

export default database
