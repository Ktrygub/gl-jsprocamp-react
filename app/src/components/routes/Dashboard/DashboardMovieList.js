import React from 'react'
import PropTypes from 'prop-types'

import MovieCard from '../../common/MovieCard/MovieCard'

const DashboardMovieList = ({ movies }) => (
  <div>{movies.map(movie => <MovieCard key={movie.imdbID} {...movie} />)}</div>
)
DashboardMovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Plot: PropTypes.string,
      imdbID: PropTypes.string
    })
  ).isRequired
}
export default DashboardMovieList
