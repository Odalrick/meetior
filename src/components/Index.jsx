import React from 'react'
import { utils } from 'redux-tiny-router'
import { connect } from 'react-redux'
import AdminLayout from './layout/AdminLayout.jsx'
import SplashLayout from './layout/SplashLayout.jsx'

import HomePage from './page/HomePage.jsx'
import NotFound from './page/NotFound.jsx'
import CoursePage from './page/CourseEditorPage'
import LessonPage from './page/LessonEditorPage'
import LoginPage from './page/LoginPage.jsx'

const componentMap = {}
const registerComponent = (src, entry) =>
{
  componentMap[src] = entry
  if(src) {
    utils.set(src)
  }
}

registerComponent('/', { Layout: SplashLayout, Main: HomePage })
registerComponent('/course/:id', { Layout: AdminLayout, Main: CoursePage })
registerComponent('/lesson/:id/:id2', { Layout: AdminLayout, Main: LessonPage })
registerComponent('/lesson/i/:index/:id/:id2', { Layout: AdminLayout, Main: LessonPage })
registerComponent('/user/login', {Layout: SplashLayout, Main: LoginPage})
registerComponent(null, { Layout: AdminLayout, Main: NotFound })

function mapStateToProps(state) {
  return {
    src: state.router.src,
    id: state.router.params.id,
    id2: state.router.params.id2,
    index: state.router.params.index && Number.parseInt(state.router.params.index),
    loginPending: state.user.get('pending', false),
  }
}

export default connect(mapStateToProps)(function Index({ src, id, id2, index, loginPending }) {
  if (loginPending) {
    return <div>Pending login</div>
  } else {
    const {Layout, Main} = componentMap[src]
    return (
      <Layout>
        <Main id={id} id2={id2} index={index} />
      </Layout>
    )
  }
})

