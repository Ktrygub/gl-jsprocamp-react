import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import registerServiceWorker from './registerServiceWorker'
import Dashboard from './components/pages/DashboardPage'
import Details from './components/pages/DetailsPage'
import FourOhFour from './components/pages/404'

import DetailsRoute from './components/routes/DetailsRoute'

import backgroundImage from './img/background.jpg'

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
        <Route exact path="/">
          <Dashboard />
        </Route>

        {/* <Route
          path="/details/:id"
          render={props => {
            const show = preload.shows.find(
              item => item.imdbID === props.match.params.id
            )
            return show ? <Details {...props} {...show} /> : <Redirect to='/'/>
          }}
        /> */}
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
