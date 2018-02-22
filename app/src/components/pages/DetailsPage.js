import React from 'react'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import starIcon from '../../img/star.png'
import emptyStarIcon from '../../img/empty_star.png'
import notAvailablePoster from '../../img/posters/not_available_poster.png'
import defaultPoster from '../../img/posters/film_strip.png'

class DetailsPage extends React.Component {
  componentDidMount() {} // for disabling eslinter error about statless class component :))

  render() {
    const { Title, Rating, Poster, Plot, Trailer } = this.props.movie
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

        <section>
          <h1>{Title}</h1>

          {[...Array(5)].map((el, i) => (
            <img
              style={{ display: 'inline', width: '2%', margin: '1px' }}
              src={i < Rating ? starIcon : emptyStarIcon}
              key={uuid()}
              alt="star"
            />
          ))}

          <img src={poster} alt={`${Title} movie poster`} />

          <p>{Plot}</p>
        </section>

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
      </div>
    )
  }
}
DetailsPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Trailer: PropTypes.string.isRequired,
    Rating: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired
  }).isRequired
}

export default DetailsPage
