import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css'

import store from './redux/store'
import { addInitMoviesAction } from './redux/actions/actions'

import DashboardPage from './components/routes/Dashboard/DashboardPage'
import DetailsPage from './components/routes/Details/DetailsPage'
import FourOhFour from './components/routes/404/404'
import AddMoviePage from './components/routes/AddMovie/AddMoviePage'
import AllMoviesTestPage from './components/routes/AllMoviesTest/AllMoviesTestPage'

import registerServiceWorker from './registerServiceWorker'

if (localStorage['ReactAppHW_V1.0.1']) {
  const movies = JSON.parse(localStorage.getItem('ReactAppHW_V1.0.1'))
  store.dispatch(addInitMoviesAction(movies))
} else {
  localStorage.setItem(
    'ReactAppHW_V1.0.1',
    JSON.stringify(store.getState().database.movies)
  )
}

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename="/gl-jsprocamp-react">
      <div className="app">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/details/:id" component={DetailsPage} />
          <Route path="/add_movie" component={AddMoviePage} />

          <Route path="/all_movies" component={AllMoviesTestPage} />

          <Route path="/404" component={FourOhFour} />
          <Route default component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
