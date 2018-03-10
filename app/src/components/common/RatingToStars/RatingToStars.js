import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import StarIcon from './StarIcon'

const MAX_RATING = 10

const StarsPanel = styled.fieldset`
  display: inline-block;
  border: none;
`
const RatingToStars = ({ rating, onClick, hoverable }) => (
  <StarsPanel>
    {[...Array(MAX_RATING)].map((el, i) => (
      <StarIcon
        hoverable={hoverable}
        key={`star${MAX_RATING - i}`}
        rating={rating}
        id={MAX_RATING - i}
        onClick={onClick}
      />
    ))}
  </StarsPanel>
)
RatingToStars.defaultProps = {
  onClick: () => {},
  rating: 0,
  hoverable: false
}
RatingToStars.propTypes = {
  rating: PropTypes.number,
  onClick: PropTypes.func,
  hoverable: PropTypes.bool
}

export default RatingToStars
