import React from 'react'
import PropTypes from 'prop-types'

import MovieCard from '../../common/MovieCard/MovieCard'

const MovieList = ({ movies }) => (
  <div>{movies.map(movie => <MovieCard key={movie.imdbID} {...movie} />)}</div>
)
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Plot: PropTypes.string,
      imdbID: PropTypes.string
    })
  ).isRequired
}
export default MovieList
