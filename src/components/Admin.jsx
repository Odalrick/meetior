import React from 'react'
import AdminLayout from './AdminLayout.jsx'
import Sidebar from '../containers/SidebarContainer'
import ShowLesson from '../containers/ShowLessonContainer'

require('./Admin.scss')

export default () => {
  return (
    <AdminLayout>
      <Sidebar/>
      <ShowLesson/>
    </AdminLayout>
  )
}

