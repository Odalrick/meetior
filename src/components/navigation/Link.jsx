import React from 'react'
import { connect } from 'react-redux'
import { tinyActions } from 'redux-tiny-router'
import IPropTypes from 'react-immutable-proptypes'

import { toUrl } from '../../lib/navigation'

const styles = require('./Link.css')

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
      <div className={styles.link} onClick={(e) => navigate(url, e)} >
        {children}
      </div>
    )
  } else {
    return (
      <a href={url} onClick={(e) => navigate(url, e)} className={styles.link} >
        {title}
      </a>
    )
  }
}

Link.propTypes = {
  to: React.PropTypes.oneOfType([
    React.PropTypes.object,
    IPropTypes.map,
  ]).isRequired,
  navigate: React.PropTypes.func,
  children: React.PropTypes.node,
}

const ConnectedLink = connect(() => ({}), mapDispatchToProps)(Link)
ConnectedLink.propTypes = {
  to: React.PropTypes.oneOfType([
    React.PropTypes.object,
    IPropTypes.map,
  ]).isRequired,
  children: React.PropTypes.node,
}

export default ConnectedLink
