import React from 'react'
import { utils } from 'redux-tiny-router'
import { connect } from 'react-redux'
import AdminLayout from './layout/AdminLayout.jsx'
import Sidebar from './navigation/Sidebar'

import Home from './page/Home.jsx'
import NotFound from './page/NotFound.jsx'
import CoursePage from './page/CourseEditorPage'
import LessonPage from './page/LessonEditorPage'

utils.set('/:page/:id')
utils.set('/:page/:id/:id2')
utils.set('/:page/i/:index/:id/:id2')

const mainComponentMap = {
  test: () => <div>Boo!</div>,
  course: CoursePage,
  lesson: LessonPage,
}

const getComp = ({ page, path }) => {
  const Main = mainComponentMap[page]
  if (Main) {
    return Main
  } else if (path === '/') {
    return Home
  } else {
    return NotFound
  }
}

function mapStateToProps(state) {
  return {
    page: state.router.params.page,
    id: state.router.params.id,
    id2: state.router.params.id2,
    index: state.router.params.index && Number.parseInt(state.router.params.index),
    path: state.router.path,
  }
}

export default connect(mapStateToProps)(({ page, id, id2, index, path }) => {
  const Main = getComp({ page, path })
  return (
    <AdminLayout>
      <Sidebar />
      <Main id={id} id2={id2} index={index} />
    </AdminLayout>
  )
})

