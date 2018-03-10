import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import DashboardMovieList from './DashboardMovieList'
import DashboardHeader from './DashboardHeader'
import DashboardPagination from './DashboardPagination'

import {
  handleSearchTermChange,
  setFilter
} from '../../../redux/actions/actions'

/* eslint-disable react/prefer-stateless-function */

const sortMoviesByProperty = (propertyName, movies) => {
  const arrCopy = Array.from(movies)
  switch (propertyName) {
    case 'Year':
    case 'Rating':
      return arrCopy.sort((a, b) => {
        const x = parseFloat(a[propertyName], 10)
        const y = parseFloat(b[propertyName], 10)
        if (x < y) return 1
        if (x > y) return -1
        return 0
      })

    case 'Title':
      return arrCopy.sort((a, b) => {
        if (a[propertyName] < b[propertyName]) return -1
        if (a[propertyName] > b[propertyName]) return 1
        return 0
      })
    default:
      return movies
  }
}

class Dashboard extends React.Component {
  onSearchTermChange = e => {
    this.props.history.push('/dashboard/page-1')
    this.props.handleSearchTermChange(e.target.value)
  }

  onFilterChange = (e, { value }) => {
    this.props.setFilter(value)
  }

  handlePaginationChange = (e, { activePage }) => {
    const currentPage = Number(
      this.props.match.params.page.replace('page-', '')
    )
    if (currentPage !== activePage)
      this.props.history.push(`/dashboard/page-${activePage}`)
  }

  render() {
    const { movies } = this.props
    const { searchTerm, filter } = this.props.dashboard
    const activePage = Number(this.props.match.params.page.replace('page-', ''))

    const sortedMovies = sortMoviesByProperty(filter, movies)

    const selectedMovies = sortedMovies.filter(movie =>
      `${movie.Title} ${movie.Plot} year::${movie.Year} ${movie.Actors} ${
        movie.Director
      } ${movie.Genre}`
        .toUpperCase()
        .includes(searchTerm.toUpperCase())
    )

    const activePageOfMovies = selectedMovies.filter(
      (movie, idx) => idx < activePage * 6 && idx >= (activePage - 1) * 6
    )

    const totalPages = parseInt((selectedMovies.length - 1) / 6, 10) + 1

    return (
      <div className="dashboard">
        <DashboardHeader
          dashboardSearch={searchTerm}
          filter={filter}
          onSearchTermChange={this.onSearchTermChange}
          onSearchClear={() => {
            this.props.handleSearchTermChange('')
            this.props.history.push('/dashboard/page-1')
          }}
          onFilterChange={this.onFilterChange}
        />

        <DashboardMovieList movies={activePageOfMovies} />

        <DashboardPagination
          activePage={activePage}
          totalPages={totalPages}
          handlePaginationChange={this.handlePaginationChange}
        />
      </div>
    )
  }
}

Dashboard.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  handleSearchTermChange: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  dashboard: PropTypes.shape({
    searchTerm: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired
  }).isRequired,
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
  dashboard: state.dashboard
})

export default connect(mapStateToProps, {
  handleSearchTermChange,
  setFilter
})(Dashboard)
