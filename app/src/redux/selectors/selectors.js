import { createSelector } from 'reselect'

export const getSearchTerm = state => state.dashboard.searchTerm
export const getFilter = state => state.dashboard.filter
export const getAllMovies = state => state.database.movies
export const getMoviesCountPerPage = state => state.dashboard.moviesCountPerPage
export const getActivePage = (state, ownProps) =>
  Number(ownProps.match.params.page.replace('page-', ''))

export const getSortedByPropertyMovies = createSelector(
  [getAllMovies, getFilter],
  (movies, filter) => {
    const arrCopy = movies.slice()
    switch (filter) {
      case 'Year':
      case 'Rating':
        return arrCopy.sort((a, b) => {
          const x = parseFloat(a[filter], 10)
          const y = parseFloat(b[filter], 10)
          if (x < y) return 1
          if (x > y) return -1
          return 0
        })

      case 'Title':
        return arrCopy.sort((a, b) => {
          if (a[filter] < b[filter]) return -1
          if (a[filter] > b[filter]) return 1
          return 0
        })
      default:
        return movies
    }
  }
)

export const getFilteredMovies = createSelector(
  [getSortedByPropertyMovies, getSearchTerm],
  (sortedMovies, searchTerm) =>
    sortedMovies.filter(movie =>
      `${movie.Title} ${movie.Plot} year::${movie.Year} ${movie.Actors} ${
        movie.Director
      } ${movie.Genre}`
        .toUpperCase()
        .includes(searchTerm.toUpperCase())
    )
)

export const getPageOfMovies = createSelector(
  [getFilteredMovies, getMoviesCountPerPage, getActivePage],
  (filteredMovies, moviesCountPerPage, activePage) =>
    filteredMovies.filter(
      (movie, idx) =>
        idx < activePage * moviesCountPerPage &&
        idx >= (activePage - 1) * moviesCountPerPage
    )
)

export const getTotalPages = createSelector(
  [getFilteredMovies, getMoviesCountPerPage],
  (filteredMovies, moviesCountPerPage) =>
    parseInt((filteredMovies.length - 1) / moviesCountPerPage, 10) + 1
)
