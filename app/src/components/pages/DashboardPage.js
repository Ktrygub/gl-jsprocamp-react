import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Pagination } from 'semantic-ui-react'

// import MovieCard from '../MovieCard'
import DashboardMovieList from './DashboardMovieList'

import { handleSearchTermChange } from '../../redux/actions/actions'

/* eslint-disable react/prefer-stateless-function */

class Dashboard extends React.Component {
  state = {
    activePage: 1,
    boundaryRange: 1,
    siblingRange: 0
  }

  handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  // handleInputChange = (e, { value }) => this.setState({ activePage: value })

  render() {
    const { movies, dashboardSearch, handleSearchTermChange } = this.props
    const { activePage, boundaryRange, siblingRange } = this.state

    const selectedMovies = movies.filter(movie =>
      `${movie.Title} ${movie.Plot} year::${movie.Year} ${movie.Actors} ${
        movie.Director
      } ${movie.Genre}`
        .toUpperCase()
        .includes(dashboardSearch.toUpperCase())
    )

    const activePageOfMovies = selectedMovies.filter(
      (movie, idx) => idx < activePage * 6 && idx >= (activePage - 1) * 6
    )

    const totalPages = parseInt((selectedMovies.length - 1) / 6, 10) + 1

    return (
      <div className="dashboard">
        <span className="header">
          <input
            type="text"
            placeholder="Search"
            value={dashboardSearch}
            onChange={e => {
              this.setState({ activePage: 1 })
              handleSearchTermChange(e.target.value)
            }}
          />

          <button
            className="addButton"
            onClick={() => this.props.history.push('/add_movie')}
          >
            ADD MOVIE
          </button>
        </span>

        <DashboardMovieList movies={activePageOfMovies} />

        <Grid verticalAlign="middle">
          <Grid.Column>
            <Pagination
              activePage={activePage}
              boundaryRange={boundaryRange}
              onPageChange={this.handlePaginationChange}
              siblingRange={siblingRange}
              totalPages={totalPages}
            />
          </Grid.Column>
        </Grid>
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
