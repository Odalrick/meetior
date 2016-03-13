import React from 'react'
import AdminLayout from './AdminLayout.jsx'
import Sidebar from './Sidebar.jsx'
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

