import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import RatingToStars from './atoms/RatingToStars'
import notAvailablePoster from '../img/posters/not_available_poster.png'
import defaultPoster from '../img/posters/film_strip.png'

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #ffda00;
  border-radius: 5px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  text-decoration: none;
  color: black;
  background-color: rgba(220, 220, 220, 0.7);
  &:hover {
    color: black;
  }
`

const Image = styled.img`
  width: 46%;
  height: 320px;
  float: left;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-size: contain;
`

const MovieCard = props => {
  let poster = props.Poster
  if (props.Poster === 'N/A') poster = notAvailablePoster
  if (!props.Poster) poster = defaultPoster
  return (
    <Wrapper to={`/details/${props.imdbID}`} className="movie-card">
      <Image src={poster} alt={`${props.Title} movie poster`} />

      <div>
        <h3>{props.Title}</h3>
        <div
          style={{ fontSize: '70%', padding: '2px', display: 'inline-table' }}
        >
          <RatingToStars rating={props.Rating} />
        </div>

        <p>{props.Plot}</p>
      </div>
    </Wrapper>
  )
}

MovieCard.propTypes = {
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Rating: PropTypes.string.isRequired,
  Plot: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired
}

export default MovieCard
