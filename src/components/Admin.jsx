import React from 'react'
import AdminLayout from './AdminLayout.jsx'
import Sidebar from '../containers/SidebarContainer'
import SlideList from '../containers/SlideListContainer'

require('./Admin.scss')

export default () => {
  return (
    <AdminLayout>
      <Sidebar/>
      <SlideList/>
    </AdminLayout>
  )
}

