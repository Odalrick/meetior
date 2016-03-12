import React from 'react'

export default function AdminLayout(props) {
  const children = props.children
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-4">{children[0]}</div>
        <div className="col-sm-8">{children[1]}</div>
      </div>
    </div>
  )
}
