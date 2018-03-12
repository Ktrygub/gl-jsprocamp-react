import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getPageOfMovies } from '../../../redux/selectors/selectors'
import MovieList from './MovieList'

const mapStateToProps = (state, ownProps) => ({
  movies: getPageOfMovies(state, ownProps)
})

const VisibleMovieList = withRouter(connect(mapStateToProps, null)(MovieList))

export default VisibleMovieList
