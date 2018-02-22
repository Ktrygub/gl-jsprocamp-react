import { ADD_MOVIE, ADD_INIT_MOVIES } from '../actionTypes'

const database = (state = {}, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      if (state.movies.some(movie => movie.imdbID === action.movie.imdbID)) {
        return state
      }
      return { ...state, movies: [action.movie, ...state.movies] }
    case ADD_INIT_MOVIES:
      return { ...state, movies: action.movies }
    default:
      return state
  }
}

export default database
