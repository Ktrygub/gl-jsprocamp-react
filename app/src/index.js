import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'
import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css'

import store from './redux/store'
import { addInitMoviesAction } from './redux/actions/actions'

import DashboardPage from './components/pages/DashboardPage'
import DetailsPage from './components/pages/DetailsPage'
import FourOhFour from './components/pages/404'
import AddMoviePage from './components/pages/AddMoviePage'

import registerServiceWorker from './registerServiceWorker'

import backgroundImage from './img/background.jpg'

if (localStorage['ReactAppHW_V1.0.0']) {
  const movies = JSON.parse(localStorage.getItem('ReactAppHW_V1.0.0'))
  store.dispatch(addInitMoviesAction(movies))
} else {
  localStorage.setItem(
    'ReactAppHW_V1.0.0',
    JSON.stringify(store.getState().database.movies)
  )
}

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename="/gl-jsprocamp-react">
      <div
        className="app"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.9)), url(${backgroundImage})`,
          backgroundSize: 'cover'
        }}
      >
        <Switch>
          <Route exact path="/" render={() => <Redirect to='/dashboard'/>} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route path="/details/:id" exact component={DetailsPage} />

          <Route path="/add_movie" component={AddMoviePage} />

          <Route default component={FourOhFour} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
