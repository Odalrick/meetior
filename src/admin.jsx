import React from 'react'
import ReactDOM from 'react-dom'
import Immutable from 'immutable'
import createSagaMiddleware from 'redux-saga'
import Admin from './components/Admin.jsx'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import slides from './ducks/slides'
//import tagSagas from './sagas/addTagSaga'

import mockSlides from './mock-data/slides'

(() => {
  const reducer = combineReducers({slides})
  const initialStateSlides = Immutable.fromJS(mockSlides)
  //const sagaMiddleware = createSagaMiddleware(tagSagas)

  //const store = createStore(reducer, {slides: initialStateSlides},
  //  compose(applyMiddleware(sagaMiddleware),
  //    window.devToolsExtension ? window.devToolsExtension() : f => f))

  const store = createStore(reducer, {slides: initialStateSlides},
      window.devToolsExtension ? window.devToolsExtension() : f => f)
  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(
    <Provider store={store}>
      <Admin />
    </Provider>,
    app
  )
})()
