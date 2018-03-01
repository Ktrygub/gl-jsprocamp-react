import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import DashboardMovieList from '../Dashboard/DashboardMovieList'

/* eslint-disable react/prefer-stateless-function */

class AllMoviesTestPage extends React.Component {
  render() {
    const { movies } = this.props

    return (
      <div className="dashboard">
        <DashboardMovieList movies={movies} />
      </div>
    )
  }
}
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
  movies: state.database.movies
})

export default connect(mapStateToProps, null)(AllMoviesTestPage)
