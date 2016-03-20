import React from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'
import Admin from './components/Admin.jsx'
import { createStore, combineReducers, } from 'redux'
import { Provider, } from 'react-redux'
import tags from './ducks/tags'

import mockTags from './mock-data/tags'

(() => {
  const reducer = combineReducers({tags, })
  const initialStateTags = Immutable.fromJS(mockTags)

  const store = createStore(reducer, {tags: initialStateTags})
  // TODO: add redux-saga middleware
  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(
    <Provider store={store}>
      <Admin />
    </Provider>,
    app
  )
})()
