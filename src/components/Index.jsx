import React from 'react'
import { utils } from 'redux-tiny-router'
import { connect } from 'react-redux'
import AdminLayout from './layout/AdminLayout.jsx'
import Sidebar from '../containers/SidebarContainer'

import Home from './page/Home.jsx'
import NotFound from './page/NotFound.jsx'
import CoursePage from './page/CourseEditorPage'

utils.set('/:page/:id')
const mainComponentMap = {
  test: () => <div>Boo!</div>,
  course: CoursePage,
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
    path: state.router.path,
  }
}

export default connect(mapStateToProps)(({ page, id, path }) => {
  const Main = getComp({ page, path })
  return (
    <AdminLayout>
      <Sidebar />
      <Main id={id}/>
    </AdminLayout>
  )
})

