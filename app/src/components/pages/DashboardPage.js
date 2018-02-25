import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import MovieCard from '../MovieCard'
import AddMovieForm from '../forms/AddMovieForm'
import { handleSearchTermChange, addMovie } from '../../redux/actions/actions'

class Dashboard extends React.Component {
  state = { isAddFormVisible: false }

  toggleAddMovieForm = () =>
    this.setState(prevState => ({
      ...prevState,
      isAddFormVisible: !prevState.isAddFormVisible
    }))

  submitForm = data => {
    const {
      Title,
      Year,
      Runtime,
      Genre,
      Director,
      Actors,
      Plot,
      Poster,
      imdbID,
      Website,
      Rating
    } = data
    const movie = {
      Title,
      Year,
      Runtime,
      Genre,
      Director,
      Actors,
      Plot,
      Poster,
      imdbID,
      Website,
      Rating,
      Trailer: ''
    }

    localStorage.setItem(
      'ReactAppHW_V1.0.0',
      JSON.stringify([movie, ...this.props.movies])
    )

    this.props.addMovie(movie)
  }

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

          <button className="addButton" onClick={this.toggleAddMovieForm}>
            ADD MOVIE
          </button>
        </span>

        {this.state.isAddFormVisible && (
          <AddMovieForm
            toggleAddMovieForm={this.toggleAddMovieForm}
            submit={this.submitForm}
          />
        )}

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
  handleSearchTermChange: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
  dashboardSearch: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Plot: PropTypes.string,
      imdbID: PropTypes.string
    })
  ).isRequired
}

export const Unwrapped = Dashboard

const mapStateToProps = state => ({
  movies: state.database.movies,
  dashboardSearch: state.dashboardSearch
})

export default connect(mapStateToProps, {
  handleSearchTermChange,
  addMovie
})(Dashboard)
