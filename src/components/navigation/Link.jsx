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

function toUrl(link) {
  const url = ['', link.get('type')]
  if(link.has('index')) {
    url.push('i')
    url.push(link.get('index'))
  }
  url.push(link.get('id'))
  if(link.get('id2')) {
    url.push(link.get('id2'))
  }
  return  url.join('/');
}

function Link(props) {
  const { navigate, to } = props
  const url = toUrl(to)
  return (
    <a href={url} onClick={(e) => navigate(url,e)}>
      {to.get('title')}
    </a>
  )
}

export default connect(() => ({}), mapDispatchToProps)(Link)
