import { ADD_MOVIE } from '../actionTypes'

const database = (state = {}, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return { ...state, movies: [action.movie, ...state.movies ] }
    default:
      return state
  }
}

export default database
