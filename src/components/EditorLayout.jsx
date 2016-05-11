import React from 'react'

export default function EditorLayout(props) {
  const headerEditor = props.children
  return (
    <div>
      {headerEditor}
    </div>
  )
}
