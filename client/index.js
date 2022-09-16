import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'
import { BrowserRouter } from 'react-router-dom'
import store from './store'

import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Auth0Provider
      domain='https://max-codes.au.auth0.com'
      clientId='Tsiq5mco9GQM4WsANnIdFmCsOoqRTT71'
      redirectUri={window.location.origin}
      audience='https://coolbananas/api'
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Auth0Provider>,
    document.getElementById('app')
  )
})
