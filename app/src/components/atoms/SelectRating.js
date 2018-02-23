import React from 'react'
import PropTypes from 'prop-types'

import RatingToStar from './RatingToStars'
import './SelectRating.css'

const SelectRating = ({ onClick }) => (
  <div className="select_rating">
    <RatingToStar rating="0" onClick={onClick} />
  </div>
)
SelectRating.propTypes = {
  onClick: PropTypes.func.isRequired
}

export default SelectRating
