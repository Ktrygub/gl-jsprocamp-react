import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MovieCard from '../MovieCard'

import { handleSearchTermChange } from '../../redux/actions/actions'

/* eslint-disable react/prefer-stateless-function */

class Dashboard extends React.Component {

  render() {
    const { movies, dashboardSearch, handleSearchTermChange } = this.props

    return (
      <div className="dashboard">
        <span className="header">
          <input
            type="text"
            placeholder="Search"
            value={dashboardSearch}
            onChange={e => handleSearchTermChange(e.target.value)}
          />

          <button
            className="addButton"
            onClick={() => this.props.history.push('/add_movie')}
          >
            ADD MOVIE
          </button>
        </span>

        <div>
          {movies
            .filter(movie =>
              `${movie.Title} ${movie.Plot} year::${movie.Year} ${
                movie.Actors
              } ${movie.Director} ${movie.Genre}`
                .toUpperCase()
                .includes(dashboardSearch.toUpperCase())
            )
            .map(movie => <MovieCard key={movie.imdbID} {...movie} />)}
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  handleSearchTermChange: PropTypes.func.isRequired,
  dashboardSearch: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Plot: PropTypes.string,
      imdbID: PropTypes.string
    })
  ).isRequired
}

const mapStateToProps = state => ({
  movies: state.database.movies,
  dashboardSearch: state.dashboardSearch
})

export default connect(mapStateToProps, {
  handleSearchTermChange
})(Dashboard)
