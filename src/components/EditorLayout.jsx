import React from 'react'

export default function EditorLayout(props) {
  const headerEditor = props.children[0]
  const nested = props.children[1]
  return (
    <div>
      {headerEditor}
	  {nested.map((n) => n)}
    </div>
  )
}
