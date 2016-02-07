import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { createStore, combineReducers, } from 'redux'
import { Provider, } from 'react-redux'
import meetings from './ducks/meetings'
import Immutable from 'immutable'

(() => {
  const reducer = combineReducers({meetings,})
  const state = Immutable.fromJS([{name: 'test',}, {name: 'test2',}, {name: 'test3',},])
  const store = createStore(reducer, {meetings: state,})
  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    app
  )
})()
