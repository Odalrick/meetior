import React from 'react'

export default function EditorLayout(props) {
  const headerEditor = props.children[0]
  const panel = props.children[1]
  return (
    <div>
      {headerEditor}
      {panel}
    </div>
  )
}
