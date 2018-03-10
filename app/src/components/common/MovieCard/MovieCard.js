import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import RatingToStars from '../RatingToStars/RatingToStars'
import notAvailablePoster from '../../../img/posters/not_available_poster.png'
import defaultPoster from '../../../img/posters/film_strip.png'

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #ffda00;
  border-radius: 5px;
  margin-bottom: 15px;
  margin-right: 15px;
  padding-right: 10px;
  overflow: hidden;
  text-decoration: none;
  color: black;
  background-color: rgba(220, 220, 220, 0.7);
  transition: all 0.2s ease-in-out;
  &:hover {
    color: black;
    transform: scale(1.04);
  }
`

const Image = styled.img`
  width: 46%;
  height: 305px;
  float: left;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-size: contain;
`

const MovieCard = props => {
  let poster = props.Poster

  if (!poster) poster = defaultPoster
  if (poster === 'N/A') poster = notAvailablePoster

  return (
    <Wrapper to={`/details/${props.imdbID}`}>
      <Image src={poster} alt={`${props.Title} movie poster`} />

      <div>
        <h3>{props.Title}</h3>
        <div
          style={{ fontSize: '70%', padding: '2px', display: 'inline-table' }}
        >
          <RatingToStars rating={Number.parseFloat(props.Rating)} />
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
