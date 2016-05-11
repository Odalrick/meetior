import React from 'react'
import AdminLayout from './AdminLayout.jsx'
import Sidebar from '../containers/SidebarContainer'

require('./Admin.scss')

export default (props) => {
  return (
    <AdminLayout>
      <Sidebar/>
      {props.children}
    </AdminLayout>
  )
}

