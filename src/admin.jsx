import React from 'react'
import ReactDOM from 'react-dom'
import createSagaMiddleware from 'redux-saga'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer, routerMiddleware } from 'react-router-redux'

import config from './config'
import dbFactory from './db/couch'

import Admin from './components/Admin'
import Login from './components/Login'
import ShowLesson from './containers/ShowLessonContainer'
import CourseEditor from './containers/CourseEditorContainer'
import LessonEditor from './containers/LessonEditorContainer'

import course from './ducks/course'
import lesson from './ducks/lesson'
import showLesson from './ducks/showLesson'
import showLessonSagas from './sagas/showLessonSagas'
import saveLessonSagas from './sagas/saveLessonSaga'


(() => {

  const db = dbFactory(config)

  const reducer = combineReducers({course, lesson, showLesson, routing: routerReducer})
  const sagaMiddleware = createSagaMiddleware(
    showLessonSagas, saveLessonSagas(db))

  const store = createStore(reducer,{},
    compose(applyMiddleware(sagaMiddleware, routerMiddleware(browserHistory)),
      window.devToolsExtension ? window.devToolsExtension() : f => f))

  const history = syncHistoryWithStore(browserHistory, store)

  const app = document.createElement('div')
  document.body.appendChild(app)
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={Login} />
        <Route path="admin" component={Admin}>
          <Route path="courses/:courseId" component={CourseEditor} />
          <Route path="courses/:courseId/lessons/:lessonId" component={LessonEditor} />
        </Route>
        {/*<Route path="show">
          <Route path="lesson" component={ShowLesson} />
        </Route>*/}
      </Router>
    </Provider>,
    app
  )
})()
