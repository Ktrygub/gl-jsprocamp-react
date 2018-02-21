import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import uuid from 'uuid'

import MovieCard from '../MovieCard'
// import AddMovieForm from '../forms/AddMovieForm'
import TestForm from '../forms/TestForm'
import {
  handleSearchTermChange,
  submitMovie
} from '../../redux/actions/actions'

class Dashboard extends React.Component {
  state = { isAddFormVisible: false }

  // submitMonster = monster => {
  //   const { monsterClasses } = this.props.database
  //   const currClass = monster.monsterClass
  //   if (Object.prototype.hasOwnProperty.call(monsterClasses, currClass)) {
  //     Object.assign(monster, monsterClasses[currClass])
  //   }

  //   this.props.createMonster(monster)
  // }
  toggleAddMovieForm = () => this.setState(prevState => ({...prevState, isAddFormVisible: !prevState.isAddFormVisible}))

  submitForm = movie => {
    this.props.submitMovie(movie)
  }

  render() {
    const { movies, dashboardSearch, handleSearchTermChange } = this.props

    return (
      <div className="dashboard">
        <header>
          <input
            type="text"
            placeholder="Search"
            value={dashboardSearch}
            onChange={handleSearchTermChange}
          />

          <button
            className="addButton"
            onClick={this.toggleAddMovieForm}
          >ADD MOVIE</button>
          {/* <div
            className="addButton"
            
          >
          <a onClick={this.toggleAddMovieForm}>NEW MOVIE</a>
            
          </div> */}
        </header>

        {this.state.isAddFormVisible && <TestForm toggleAddMovieForm={this.toggleAddMovieForm} submit={this.submitForm} />}
        

        <div>
          {movies
            .filter(
              movie =>
                `${movie.title} ${movie.description}`
                  .toUpperCase()
                  .indexOf(dashboardSearch.toUpperCase()) >= 0
            )
            .map(movie => <MovieCard key={uuid()} {...movie} />)}
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  handleSearchTermChange: PropTypes.func.isRequired,
  submitMovie: PropTypes.func.isRequired,
  dashboardSearch: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
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
  submitMovie
})(Dashboard)
