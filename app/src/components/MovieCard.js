import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import uuid from 'uuid'

import starIcon from '../img/star.png'

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
`

const Image = styled.img`
  width: 46%;
  height: 320px;
  float: left;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-size: contain;
`

const MovieCard = props => (
  <Wrapper to={`/details/${props.imdbID}`} className="movie-card">
    <Image
      src={require(`../img/posters/${props.poster}`)} // eslint-disable-line
      alt={`${props.title} movie poster`}
    />
    <div>
      <h3>{props.title}</h3>
      {[...Array(parseInt(props.rating, 10))].map(() => (
        <img
          src={starIcon}
          key={uuid()}
          alt="star"
          style={{ display: 'inline', width: '4%' }}
        />
      ))}

      <p>{props.description}</p>
    </div>
  </Wrapper>
)

MovieCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired
}

export default MovieCard
