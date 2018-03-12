import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MovieList from '../Dashboard/MovieList'
import {
  getAllMovies
} from '../../../redux/selectors/selectors'

/* eslint-disable react/prefer-stateless-function */

class AllMoviesTestPage extends React.Component {
  render() {
    const { movies } = this.props

    return (
      <div className="dashboard">
        <MovieList movies={movies} />
      </div>
    )
  }
}
/* eslint-enable react/prefer-stateless-function */
AllMoviesTestPage.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Plot: PropTypes.string,
      imdbID: PropTypes.string
    })
  ).isRequired
}

const mapStateToProps = state => ({
  movies: getAllMovies(state)
})

export default connect(mapStateToProps, null)(AllMoviesTestPage)
