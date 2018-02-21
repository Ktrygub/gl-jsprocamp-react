import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const DetailsRoute = ({ component: Component, movies, ...rest }) => {
  const movie = movies.find(item => item.imdbID === rest.computedMatch.params.id)
  return (
    <Route
      {...rest}
      render={props =>
        movie ? <Component {...props} movie={movie} /> : <Redirect to="/" />
      }
    />
  )
}

DetailsRoute.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  component: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  movies: state.database.movies
})

export default withRouter(connect(mapStateToProps, null)(DetailsRoute))
