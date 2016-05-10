import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import config from './config'
import dbFactory from './db/couch'

import Admin from './components/Admin'
import Login from './components/Login'
import ShowLesson from './containers/ShowLessonContainer'
import CourseEditor from './components/CourseEditor'

import lesson from './ducks/lesson'
import showLesson from './ducks/showLesson'
import showLessonSagas from './sagas/showLessonSagas'
import saveLessonSagas from './sagas/saveLessonSaga'


(() => {

  const db = dbFactory(config)

  const reducer = combineReducers({lesson, showLesson, routing: routerReducer})
  const sagaMiddleware = createSagaMiddleware(
    showLessonSagas, saveLessonSagas(db))

  const store = createStore(reducer,{},
    compose(applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f))

  const history = syncHistoryWithStore(browserHistory, store)

  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Login} />
        <Route path="admin" component={Admin}>
          <Route path="courses/:id" component={CourseEditor} />
        </Route>
        {/*<Route path="show">
          <Route path="lesson" component={ShowLesson} />
        </Route>*/}
      </Router>
    </Provider>,
    app
  )
})()
