import React from 'react'
import { utils } from 'redux-tiny-router'
import { connect } from 'react-redux'
import AdminLayout from './layout/AdminLayout.jsx'
import SplashLayout from './layout/SplashLayout.jsx'

import HomePage from './page/HomePage.jsx'
import NotFound from './page/NotFound.jsx'
import CoursePage from './page/CourseEditorPage'
import LessonPage from './page/LessonEditorPage'

utils.set('/:page/:id')
utils.set('/:page/:id/:id2')
utils.set('/:page/i/:index/:id/:id2')
utils.set('/user/:userPage/i/:index/:id/:id2')

const mainComponentMap = {
  test: () => <div>Boo!</div>,
  course: CoursePage,
  lesson: LessonPage,
}

const getComp = ({ page, path }) => {
  const Main = mainComponentMap[page]
  if (Main) {
    return { Layout: AdminLayout, Main }
  } else if (path === '/') {
    return { Layout: SplashLayout, Main: HomePage }
  } else {
    return { Layout: AdminLayout, Main: NotFound }
  }
}

function mapStateToProps(state) {
  return {
    page: state.router.params.page,
    id: state.router.params.id,
    id2: state.router.params.id2,
    index: state.router.params.index && Number.parseInt(state.router.params.index),
    path: state.router.path,
    loginPending: state.user.get('pending', false),
  }
}

export default connect(mapStateToProps)(function Index({ page, id, id2, index, path, loginPending }) {
  if (loginPending) {
    return <div>Pending login</div>
  } else {
    const {Layout, Main} = getComp({ page, path })
    return (
      <Layout>
        <Main id={id} id2={id2} index={index} />
      </Layout>
    )
  }
})

