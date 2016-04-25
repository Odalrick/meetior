import React from 'react'
import AdminLayout from './AdminLayout.jsx'
import Sidebar from '../containers/SidebarContainer'
import LessonEditor from '../containers/LessonEditorContainer'

require('./Admin.scss')

export default () => {
  return (
    <AdminLayout>
      <Sidebar/>
      <LessonEditor/>
    </AdminLayout>
  )
}

