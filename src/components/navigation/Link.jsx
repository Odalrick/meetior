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
  const { navigate, to } = props
  const url = toUrl(to)
  return (
    <a href={url} onClick={(e) => navigate(url, e)} >
      {to.get('title')}
    </a>
  )
}

export default connect(() => ({}), mapDispatchToProps)(Link)
