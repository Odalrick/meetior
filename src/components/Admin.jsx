import React from 'react'
import AdminLayout from './AdminLayout.jsx'
import Sidebar from '../containers/SidebarContainer'
import TagsEditor from '../containers/TagsEditorContainer'

require('./Admin.scss')

export default () => {
  return (
    <AdminLayout>
      <Sidebar/>
      <TagsEditor/>
    </AdminLayout>
  )
}

