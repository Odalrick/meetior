import React, {Component} from 'react'

export default function SplashLayout(props) {
  const children = props.children
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">{children}</div>
      </div>
    </div>
  )
}
