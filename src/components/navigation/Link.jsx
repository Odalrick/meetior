import React from 'react'
import { connect } from 'react-redux'
import { tinyActions } from 'redux-tiny-router'

function mapDispatchToProps(dispatch) {
  return {
    navigate: (url, event) => {
      event.preventDefault()
      dispatch(tinyActions.navigateTo(url))
    }
  }
}

function Link(props) {
  const { navigate, to } = props
  return (
    <a href={to} onClick={(e) => navigate(to,e)}>
      {props.children}
    </a>
  )
}

export default connect(() => ({}), mapDispatchToProps)(Link)
