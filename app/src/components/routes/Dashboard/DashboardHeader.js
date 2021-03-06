import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Input, Button, Checkbox } from 'semantic-ui-react'
import styled from 'styled-components'

const SortPanel = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  width: 18%;
`

const DashboardHeader = ({
  dashboardSearch,
  filter,
  onSearchTermChange,
  onFilterChange,
  onSearchClear,
  history
}) => (
  <span className="header">
    <Input
      action={
        dashboardSearch ? (
          <Button size="mini" onClick={onSearchClear} circular icon="delete" />
        ) : null
      }
      placeholder="Search"
      value={dashboardSearch}
      onChange={onSearchTermChange}
    />

    <SortPanel>
      Sort:
      <Checkbox
        radio
        name="checkboxRadioGroup"
        value="Title"
        checked={filter === 'Title'}
        onChange={onFilterChange}
      />
      Title
      <Checkbox
        radio
        name="checkboxRadioGroup"
        value="Rating"
        checked={filter === 'Rating'}
        onChange={onFilterChange}
      />
      Rating
      <Checkbox
        radio
        name="checkboxRadioGroup"
        value="Year"
        checked={filter === 'Year'}
        onChange={onFilterChange}
      />
      Year
    </SortPanel>

    <button className="addButton" onClick={() => history.push('/add_movie')}>
      ADD MOVIE
    </button>
  </span>
)

DashboardHeader.propTypes = {
  dashboardSearch: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onSearchTermChange: PropTypes.func.isRequired,
  onSearchClear: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
}

export default withRouter(DashboardHeader)
