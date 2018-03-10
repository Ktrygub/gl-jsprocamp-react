import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import 'font-awesome/css/font-awesome.min.css'

const Input = styled.input`
  display: none;
`

const Label = styled.label`
  float: right;
  color: ${props => (props.checked ? '#ffd700' : '#ddd')};
  &:before {
    margin: 0.2em;
    font-size: 1.25em;
    display: inline-block;
    font-family: FontAwesome;
    position: ${props => (props.half ? 'absolute' : 'inherit')};
    content: ${props => (props.half ? '"\f089"' : '"\f005"')};
  }

  &:hover,
  &:hover ~ Label {
    color: ${props => (props.hoverable ? '#ffed85' : null)};
  }
`

const StarIcon = ({ id, rating, onClick, hoverable }) => (
  <React.Fragment>
    <Input
      id={id}
      defaultValue={id}
      onClick={onClick}
      defaultChecked={id === rating}
    />
    <Label
      hoverable={hoverable}
      checked={id <= rating}
      htmlFor={id}
      title={`${id} stars`}
    />
    <Input
      id={id - 0.5}
      defaultValue={id - 0.5}
      onClick={onClick}
      defaultChecked={id - 0.5 === rating}
    />
    <Label
      half
      hoverable={hoverable}
      checked={id - 0.5 <= rating}
      htmlFor={id - 0.5}
      title={`${id - 0.5} stars`}
    />
  </React.Fragment>
)

StarIcon.propTypes = {
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  hoverable: PropTypes.bool.isRequired
}

export default StarIcon
