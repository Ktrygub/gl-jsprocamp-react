import React from 'react'
import PropTypes from 'prop-types'

import './RatingToStart.css'

const MIN_RATING = 0
const MAX_RATING = 10
const TOTAL_STARS = MAX_RATING - MIN_RATING

const RatingToStars = ({ rating, onClick }) => (
  <fieldset className="rating_to_star">
    {/* eslint-disable jsx-a11y/label-has-for */}

    {[...Array(TOTAL_STARS)].map((el, i) => (
      <React.Fragment key={`star${TOTAL_STARS - i}`}>
        <input
          id={`star${TOTAL_STARS - i}`}
          name="rating"
          type="radio"
          value={`${TOTAL_STARS - i}`}
          onClick={onClick}
          defaultChecked={TOTAL_STARS - i === Number.parseFloat(rating)}
        />
        <label
          className={
            TOTAL_STARS - i > rating
              ? `full`
              : `full checked`
          }
          htmlFor={`star${TOTAL_STARS - i}`}
          title={`${TOTAL_STARS - i} stars`}
        />
        <input
          id={`star${TOTAL_STARS - i}half`}
          name="rating"
          type="radio"
          value={`${TOTAL_STARS - i - 1}.5`}
          onClick={onClick}
          defaultChecked={TOTAL_STARS - i - 0.5 === Number.parseFloat(rating)}
        />
        <label
          className={
            TOTAL_STARS - i - 0.5 > rating
              ? `half`
              : `half checked`
          }
          htmlFor={`star${TOTAL_STARS - i}half`}
          title={`${TOTAL_STARS - i - 1}.5 stars`}
        />
      </React.Fragment>
    ))}
    {/* eslint-enable jsx-a11y/label-has-for */}
  </fieldset>
)
RatingToStars.defaultProps = {
  onClick: () => {}
}
RatingToStars.propTypes = {
  rating: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default RatingToStars
