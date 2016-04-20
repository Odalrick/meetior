import React from 'react'

import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill';

export default function(props) {
  const {handleEditorChange} = props

  return (
    <ReactQuill theme="snow"
                value={props.text}
                onChange={handleEditorChange}
                pollInterval={1000} />
  )
}
