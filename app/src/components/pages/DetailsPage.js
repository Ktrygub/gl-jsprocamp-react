import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'
import { Grid, Segment, Modal, Button } from 'semantic-ui-react'

import SelectRating from '../atoms/SelectRating'
import {
  handleSearchTermChange,
  editMovie,
  deleteMovie
} from '../../redux/actions/actions'

import notAvailablePoster from '../../img/posters/not_available_poster.png'
import defaultPoster from '../../img/posters/film_strip.png'

class DetailsPage extends React.Component {
  state = {
    data: {
      newRating: this.props.movie.Rating,
      newPlot: this.props.movie.Plot,
      Genres: this.props.movie.Genre.split(', '),
      Actors: this.props.movie.Actors.split(', '),
      Directors: this.props.movie.Director.split(', ')
    },
    modalOpen: false
  }

  onSubmitChanges = () => {
    const { imdbID } = this.props.movie
    const newMovie = {
      ...this.props.movie,
      Rating: this.state.data.newRating,
      Plot: this.state.data.newPlot
    }
    this.props.editMovie(imdbID, newMovie)
  }

  onDeleteMovie = () => {
    this.props.deleteMovie(this.props.movie.imdbID)
    const newLocalStorage = JSON.parse(
      localStorage.getItem('ReactAppHW_V1.0.0')
    ).filter(el => el.imdbID !== this.props.movie.imdbID)
    localStorage.setItem('ReactAppHW_V1.0.0', JSON.stringify(newLocalStorage))
    this.props.history.push('/')
  }

  onCancelChanges = () => {
    this.setState({
      data: {
        ...this.state.data,
        newRating: this.props.movie.Rating,
        newPlot: this.props.movie.Plot
      }
    })
  }

  onModalShow = () => this.setState({ ...this.state, modalOpen: true })
  onModalClose = () => this.setState({ ...this.state, modalOpen: false })

  onRatingClick = e => {
    const newRating = e.target.value
    this.setState(prevState => ({
      ...prevState,
      data: { ...prevState.data, newRating }
    }))
  }

  onDescrChange = e => {
    this.setState({
      data: { ...this.state.data, newPlot: e.target.value }
    })
  }

  arrayOfStringsRepresentation = array =>
    array.map(
      (el, i, arr) =>
        i < arr.length - 1 ? (
          <React.Fragment key={el}>
            <Link to="/" className="searchable">
              {el}
            </Link>{' '}
            /
          </React.Fragment>
        ) : (
          <Link to="/" className="searchable" key={el}>
            {el}
          </Link>
        )
    )

  isAnyMovieDataChanged = () =>
    this.state.data.newRating !== this.props.movie.Rating ||
    this.state.data.newPlot !== this.props.movie.Plot

  render() {
    if (!this.props.movie) {
      return <Redirect to="/" />
    }

    const { Title, Poster, imdbID } = this.props.movie
    let poster = Poster
    if (Poster === 'N/A') poster = notAvailablePoster
    if (Poster === '') poster = defaultPoster

    return (
      <div className="details">
        <span className="header">
          <p />
          <button
            className="addButton"
            onClick={() => {
              this.props.history.push('/')
            }}
          >
            BACK
          </button>
        </span>

        <Grid className="movie_card">
          <Grid.Row style={{ padding: 0 }}>
            <Grid.Column width={5} className="grid_left" style={{ padding: 0 }}>
              <img src={poster} alt={`${Title} movie poster`} />
            </Grid.Column>

            <Grid.Column width={11}>
              <Grid.Row>
                <Grid.Column width={11}>
                  <textarea
                    className="title"
                    disabled
                    rows={1}
                    defaultValue={Title}
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column width={11}>
                  <SelectRating
                    rating={this.state.data.newRating}
                    onClick={this.onRatingClick}
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className="description_row">
                <Segment.Group horizontal>
                  <Segment basic className="plot_segment">
                    <textarea
                      className="plot"
                      onChange={this.onDescrChange}
                      value={this.state.data.newPlot}
                    />
                  </Segment>
                  <Segment className="info_segment">
                    <div
                      className="searchable_info"
                      role="presentation"
                      onClick={e => {
                        if (e.target.className === 'searchable') {
                          this.props.handleSearchTermChange(e.target.innerText)
                        }
                      }}
                    >
                      <p>
                        Release:{' '}
                        <Link to="/" className="searchable">{`${
                          this.props.movie.Year
                        }`}</Link>
                      </p>
                      <p>
                        Genre:{' '}
                        {this.arrayOfStringsRepresentation(
                          this.state.data.Genres
                        )}
                      </p>
                      <p>
                        Director:{' '}
                        {this.arrayOfStringsRepresentation(
                          this.state.data.Directors
                        )}
                      </p>
                      <p>
                        Actors:{' '}
                        {this.arrayOfStringsRepresentation(
                          this.state.data.Actors
                        )}
                      </p>
                    </div>
                    <div className="info">
                      <i />
                      <span>{`${this.state.data.newRating} / 10`}</span>
                      <a
                        href={`http://www.imdb.com/title/${imdbID}`}
                        target="_blank"
                      >
                        ( read more... )
                      </a>
                    </div>
                  </Segment>
                </Segment.Group>
              </Grid.Row>

              <Grid.Row className="buttons">
                <button
                  className={`addButton discard ${
                    this.isAnyMovieDataChanged() ? '' : 'hide'
                  }`}
                  onClick={this.onCancelChanges}
                >
                  DISCARD
                </button>
                <button
                  className={`addButton submit ${
                    this.isAnyMovieDataChanged() ? '' : 'hide'
                  }`}
                  onClick={this.onSubmitChanges}
                >
                  SUBMIT
                </button>
                <button className="addButton delete" onClick={this.onModalShow}>
                  DELETE
                </button>
              </Grid.Row>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Modal
          dimmer="blurring"
          size="mini"
          open={this.state.modalOpen}
          onClose={this.onModalClose}
        >
          <Modal.Header>Delete this movie?</Modal.Header>
          <Modal.Content>
            Are you sure you want to delete this movie?
          </Modal.Content>
          <Modal.Actions>
            <Button positive content="No" onClick={this.onModalClose} />

            <Button
              negative
              content="Yes"
              icon="checkmark"
              labelPosition="right"
              onClick={this.onDeleteMovie}
            />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
DetailsPage.defaultProps = {
  movie: undefined
}

DetailsPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  handleSearchTermChange: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Trailer: PropTypes.string.isRequired,
    Rating: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    Actors: PropTypes.string.isRequired,
    Website: PropTypes.string.isRequired
  })
}

const mapStateToProps = (state, ownProps) => ({
  movie: state.database.movies.find(
    item => item.imdbID === ownProps.match.params.id
  )
})

export default connect(mapStateToProps, {
  handleSearchTermChange,
  editMovie,
  deleteMovie
})(DetailsPage)
