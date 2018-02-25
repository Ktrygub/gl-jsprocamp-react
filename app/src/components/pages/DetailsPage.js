import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { Grid, Segment } from 'semantic-ui-react'

// import RatingToStars from '../atoms/RatingToStars'
import SelectRating from '../atoms/SelectRating'
import notAvailablePoster from '../../img/posters/not_available_poster.png'
import defaultPoster from '../../img/posters/film_strip.png'

class DetailsPage extends React.Component {
  state = {
    data: {
      newRating: this.props.movie.Rating,
      newPlot: this.props.movie.Plot,
      Genres: this.props.movie.Genre.split(','),
      Actors: this.props.movie.Actors.split(','),
      Directors: this.props.movie.Director.split(',')
    }
  }

  onSubmit = () => {

  }

  onCancel = () => {
    this.setState({data: {...this.state.data, newRating: this.props.movie.Rating, newPlot: this.props.movie.Plot}})
  }

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
      (genre, i, arr) =>
        i < arr.length - 1 ? (
          <React.Fragment key={genre}>
            <span>{genre}</span> /
          </React.Fragment>
        ) : (
          <span key={genre}>{genre}</span>
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
                    <div className="info">
                      {/* <p>Release: <span>{`${this.props.movie.Year}`}</span></p>
                  <p>Genre: <span>{`${this.props.movie.Genre}`}</span></p>
                  <p>Director: <span>{`${this.props.movie.Director}`}</span></p>
                  <p>Actors: <span>{`${this.props.movie.Actors}`}</span></p> */}
                      <p>
                        Release: <span>{`${this.props.movie.Year}`}</span>
                      </p>
                      {/* <p>
                        Genre: <span>{`${this.props.movie.Genre}`}</span>
                      </p> */}
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
                      onClick={this.onCancel}
                    >
                      DISCARD
                    </button>
                    <button
                      className={`addButton submit ${
                        this.isAnyMovieDataChanged() ? '' : 'hide'
                      }`}
                      onClick={this.onSubmit}
                    >
                      SUBMIT
                    </button>
                  
              </Grid.Row>
              {/* <Grid.Row>
                <Grid.Column width={11}>
                  <div>
                    {Trailer && (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${Trailer}?rel=0&amp;showinfo=0&amp;controls=0`}
                        frameBorder="0"
                        allowFullScreen
                        title={`Trailer for ${Title}`}
                      />
                    )}
                  </div>
                </Grid.Column>
              </Grid.Row> */}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
DetailsPage.defaultProps = {
  movie: undefined
}

DetailsPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
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

export default connect(mapStateToProps, null)(DetailsPage)
