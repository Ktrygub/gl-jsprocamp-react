import React from 'react'
import PropTypes from 'prop-types'

import RatingToStar from './RatingToStars'
import './SelectRating.css'

const SelectRating = ({ onClick, rating }) => (
  <div className="select_rating">
    <RatingToStar rating={rating} onClick={onClick} />
  </div>
)
SelectRating.defaultProps = {
  rating: '0'
}
SelectRating.propTypes = {
  onClick: PropTypes.func.isRequired,
  rating: PropTypes.string
}

export default SelectRating
