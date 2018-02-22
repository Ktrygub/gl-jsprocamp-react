import React from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios'

import './AddMovieForm.css'
import notAvailablePoster from '../../img/posters/not_available_poster.png'
import defaultPoster from '../../img/posters/film_strip.png'

const OMDB_URL_BY_ID = 'http://www.omdbapi.com/?apikey=ad3a71c2&i='
const OMDB_URL_BY_TITLE = 'http://www.omdbapi.com/?apikey=ad3a71c2&s='

const getByID = imdbID => axios.get(`${OMDB_URL_BY_ID}${imdbID}`)

const searchByTitle = title => axios.get(`${OMDB_URL_BY_TITLE}${title}`)

class TestForm extends React.Component {
  state = {
    query: '',
    loading: false,
    options: [],
    movie: { imdbID: '', Rating: '0' },
    errors: {}
  }

  onRatingClick = e => {
    const Rating = e.target.value
    this.setState(prevState => ({
      ...prevState,
      movie: { ...prevState.movie, Rating }
    }))
  }

  onChange = (e, data) => {
    const imdbID = data.value
    this.setState({ loading: true })

    getByID(imdbID)
      .then(res => {
        const { data } = res
        const movie = { ...data, Rating: this.state.movie.Rating, imdbID }
        this.setState(prevState => ({ ...prevState, movie, loading: false }))
      })
      .catch(() => {
        this.setState({ loading: false })
      })
  }

  onDescrChange = e => {
    this.setState({
      movie: { ...this.state.movie, Plot: e.target.value }
    })
  }

  onSearchChange = (e, data) => {
    clearTimeout(this.timer)
    this.setState({ query: data.searchQuery })
    this.timer = setTimeout(this.fetchOptions, 1000)
  }

  onCancel = () => {
    this.props.toggleAddMovieForm()
  }

  onSubmit = e => {
    e.preventDefault()
    const errors = this.validate(this.state.movie.imdbID)
    if (Object.keys(errors).length === 0) {
      const { movie } = this.state
      this.props.submit(movie)

      this.props.toggleAddMovieForm()
    }
    this.setState({ errors })
  }

  validate = id => {
    const errors = {}
    if (!id) errors.title = `Title can't be blank`
    return errors
  }

  fetchOptions = () => {
    if (!this.state.query) return
    this.setState({ loading: true })

    searchByTitle(this.state.query)
      .then(res => res.data.Search)
      .then(movies => {
        const options = []
        movies.forEach(movie => {
          options.push({
            key: movie.imdbID,
            value: movie.imdbID,
            text: movie.Title
          })
        })
        this.setState({ loading: false, options })
      })
      .catch(() => {
        this.setState({ loading: false })
      })
  }

  render() {
    let poster = this.state.movie.Poster
    if (this.state.movie.Poster === 'N/A') poster = notAvailablePoster
    if (!this.state.movie.Poster) poster = defaultPoster

    return (
      <div>
        <div className="card">
          <div className="card_left">
            <img src={poster} alt={`${this.state.movie.Title} movie poster`} />
          </div>
          <div className="card_right">

            <div className="title_dropdown">
              <Dropdown
                className="Dropdown"
                fluid
                search
                placeholder={this.state.errors.title || 'Title...'}
                onSearchChange={this.onSearchChange}
                options={this.state.options}
                loading={this.state.loading}
                onChange={this.onChange}
              />
            </div>

            <div className="card_right__details">
              <div className="card_right__rating">
                <div className="card_right__rating__stars">
                  <fieldset className="rating">
                    {/* eslint-disable jsx-a11y/label-has-for */}
                    <input
                      id="star5"
                      name="rating"
                      type="radio"
                      value="5"
                      onClick={this.onRatingClick}
                    />
                    <label htmlFor="star5" title="5 stars" />
                    <input
                      id="star4"
                      name="rating"
                      type="radio"
                      value="4"
                      onClick={this.onRatingClick}
                    />
                    <label htmlFor="star4" title="4 stars" />
                    <input
                      id="star3"
                      name="rating"
                      type="radio"
                      value="3"
                      onClick={this.onRatingClick}
                    />
                    <label htmlFor="star3" title="3 stars" />
                    <input
                      id="star2"
                      name="rating"
                      type="radio"
                      value="2"
                      onClick={this.onRatingClick}
                    />
                    <label htmlFor="star2" title="2 stars" />
                    <input
                      id="star1"
                      name="rating"
                      type="radio"
                      value="1"
                      onClick={this.onRatingClick}
                    />
                    <label htmlFor="star1" title="1 star" />
                    {/* eslint-enable jsx-a11y/label-has-for */}
                  </fieldset>
                </div>
              </div>

              <textarea
                rows={6}
                cols={52}
                placeholder="Movie Description"
                onChange={this.onDescrChange}
                className="movie_description"
                value={this.state.movie.Plot}
              />
            </div>
            <div className="controls">
              <button
                className="card_right__button cancel"
                onClick={this.onCancel}
              >
                CANCEL
              </button>
              <button className="card_right__button" onClick={this.onSubmit}>
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

TestForm.propTypes = {
  submit: PropTypes.func.isRequired,
  toggleAddMovieForm: PropTypes.func.isRequired
}

export default TestForm
