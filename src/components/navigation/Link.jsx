import React from 'react'
import { connect } from 'react-redux'
import { tinyActions } from 'redux-tiny-router'

import { toUrl } from '../../lib/navigation'

function mapDispatchToProps(dispatch) {
  return {
    navigate: (url, event) => {
      event.preventDefault()
      dispatch(tinyActions.navigateTo(url))
    },
  }
}

function Link(props) {
  const { navigate, to, children } = props
  const url = toUrl(to)
  const title = to.get ? to.get('title') : to.title
  if (children) {
    return (
      <div onClick={(e) => navigate(url, e)} >
        {children}
      </div>
    )
  } else {
    return (
      <a href={url} onClick={(e) => navigate(url, e)} >
        {title}
      </a>
    )
  }
}

export default connect(() => ({}), mapDispatchToProps)(Link)
