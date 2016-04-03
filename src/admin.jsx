import React from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'
import createSagaMiddleware from 'redux-saga'
import Admin from './components/Admin.jsx'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import tags from './ducks/tags'
import tagSagas from './sagas/addTagSaga'

import mockTags from './mock-data/tags'

(() => {
  const reducer = combineReducers({tags})
  const initialStateTags = Immutable.fromJS(mockTags)
  const sagaMiddleware = createSagaMiddleware(tagSagas)

  const store = createStore(reducer, {tags: initialStateTags}, applyMiddleware(sagaMiddleware))
  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(
    <Provider store={store}>
      <Admin />
    </Provider>,
    app
  )
})()
