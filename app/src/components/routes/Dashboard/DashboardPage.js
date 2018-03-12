import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import VisibleMovieList from './VisibleMovieList'
import DashboardHeader from './DashboardHeader'
import DashboardPagination from './DashboardPagination'

import {
  handleSearchTermChange,
  setFilter
} from '../../../redux/actions/actions'
import {
  getSearchTerm,
  getFilter,
  getTotalPages
} from '../../../redux/selectors/selectors'

class Dashboard extends React.Component {
  onSearchTermChange = e => {
    this.props.history.push('/dashboard/page-1')
    this.props.handleSearchTermChange(e.target.value)
  }

  onFilterChange = (e, { value }) => {
    this.props.setFilter(value)
  }

  handlePaginationChange = (e, { activePage }) => {
    const currentPage = Number(
      this.props.match.params.page.replace('page-', '')
    )
    if (currentPage !== activePage)
      this.props.history.push(`/dashboard/page-${activePage}`)
  }

  render() {
    const { totalPages } = this.props
    const { searchTerm, filter } = this.props
    const activePage = Number(this.props.match.params.page.replace('page-', ''))

    return (
      <div className="dashboard">
        <DashboardHeader
          dashboardSearch={searchTerm}
          filter={filter}
          onSearchTermChange={this.onSearchTermChange}
          onSearchClear={() => {
            this.props.handleSearchTermChange('')
            this.props.history.push('/dashboard/page-1')
          }}
          onFilterChange={this.onFilterChange}
        />

        <VisibleMovieList />

        <DashboardPagination
          activePage={activePage}
          totalPages={totalPages}
          handlePaginationChange={this.handlePaginationChange}
        />
      </div>
    )
  }
}

Dashboard.propTypes = {
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  handleSearchTermChange: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
  setFilter: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
  searchTerm: getSearchTerm(state),
  filter: getFilter(state),
  totalPages: getTotalPages(state)
})

export default connect(mapStateToProps, {
  handleSearchTermChange,
  setFilter
})(Dashboard)
