import React from 'react'

export default function AdminLayout(props) {
  const children = props.children
  return (
    <div>
      <div>{children[0]}</div>
      <div>{children[1]}</div>
    </div>
  )
}
