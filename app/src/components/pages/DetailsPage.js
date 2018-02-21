import React from 'react'
// import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import uuid from 'uuid'

import starIcon from '../../img/star.png'

class DetailsPage extends React.Component {
  componentDidMount() {}
  render() {
    const { title, rating, poster, description, trailer } = this.props.movie

    return (
      <div className="details">
        <header>
          <p />
          <button
            className="addButton"
            onClick={() => {
              this.props.history.push('/')
            }}
          >
            BACK
          </button>
        </header>

        <section>
          <h1>{title}</h1>
          {[...Array(parseInt(rating, 10))].map(() => (
            <img
              src={starIcon}
              alt="star"
              key={uuid()}
              style={{ display: 'inline', width: '2%', margin: '1px' }}
            />
          ))}
          <img
            src={require(`../../img/posters/${poster}`)} // eslint-disable-line
            alt={`Poster for ${title}`}
          />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;showinfo=0&amp;controls=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    )
  }
}
DetailsPage.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    trailer: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired
  }).isRequired
}

// export default connect()(Details)
export default DetailsPage
