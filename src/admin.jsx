import React from 'react'
import ReactDOM from 'react-dom'
import Admin from './components/Admin.jsx'
import { createStore, combineReducers, } from 'redux'
import { Provider, } from 'react-redux'
import meetings from './ducks/meetings'

(() => {
  const reducer = combineReducers({meetings,})
  const store = createStore(reducer)
  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(
    <Provider store={store}>
      <Admin />
    </Provider>,
    app
  )
})()
