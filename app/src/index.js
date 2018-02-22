import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import 'semantic-ui-css/semantic.min.css'

import store from './redux/store'
import { addInitMovies } from './redux/actions/actions'

import Dashboard from './components/pages/DashboardPage'
import DetailsRoute from './components/routes/DetailsRoute'
import Details from './components/pages/DetailsPage'
import FourOhFour from './components/pages/404'

import registerServiceWorker from './registerServiceWorker'

import backgroundImage from './img/background.jpg'

if (localStorage.ReactAppHW) {
  const movies = JSON.parse(localStorage.getItem('ReactAppHW'))
  store.dispatch(addInitMovies(movies))
}

const App = () => (
  <Provider store={store}>
    <div
      className="app"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.9)), url(${backgroundImage})`,
        backgroundSize: 'cover'
      }}
    >
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <DetailsRoute path="/details/:id" exact component={Details} />
        <Route default component={FourOhFour} />
      </Switch>
    </div>
  </Provider>
)

ReactDOM.render(
  <BrowserRouter basename="/gl-jsprocamp-react">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
