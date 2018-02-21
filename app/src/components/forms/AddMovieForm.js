import React from 'react'
import PropTypes from 'prop-types'

class AddMovieForm extends React.Component {
  state = {
    data: {
      title: '',
      description: '',
      rating: '1',
      poster: 'loading.png',
      imdbID: 'tt0268978',
      trailer: 'WFJgUm7iOKw'
    },
    errors: {}
  }

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    })
  }

  onSubmit = e => {
    e.preventDefault()
    const errors = this.validate(this.state.data)
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data)
      this.props.toggleAddMovieForm()
    }
    this.setState({ errors })
  }

  onCancel = () => {
    this.props.toggleAddMovieForm()
  }

  validate = data => {
    const errors = {}
    if (!data.title) errors.title = `Can't be blank`
    return errors
  }

  render() {
    const { data, errors } = this.state

    return (
      <div>
        <form className="card_form">
          <div>
            <input
              error={errors.title}
              placeholder={errors.title || 'Title'}
              name="title"
              id="title"
              value={data.title}
              onChange={this.onChange}
            />
          </div>

          <div>
            <select
              error={errors.rating}
              name="rating"
              id="rating"
              placeholder={errors.rating || 'Rating'}
              value={data.rating}
              onChange={this.onChange}
            >
              {[1, 2, 3, 4, 5].map(el => (
                <option key={el} value={el}>
                  {el} star{el > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>

          <div>
            <textarea
              cols="120"
              rows="5"
              error={errors.description}
              placeholder={errors.description || 'Movie Description'}
              name="description"
              id="description"
              value={data.description}
              onChange={this.onChange}
            />
          </div>

          <div>
            <button onClick={this.onSubmit} className="addButton">
              {' '}
              Create Hero{' '}
            </button>
            <button type="button" onClick={this.onCancel} className="addButton">
              {' '}
              Cancel{' '}
            </button>
          </div>
        </form>
      </div>
    )
  }
}

AddMovieForm.propTypes = {
  submit: PropTypes.func.isRequired,
  toggleAddMovieForm: PropTypes.func.isRequired
}

export default AddMovieForm
