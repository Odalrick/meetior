import React from 'react'
import { connect } from 'react-redux'
import Link from './Link'
import style from './Sidebar.css'
import I from 'immutable'

function mapStateToProps(state) {
  return {
    links: state.lists.getIn(['sidebar']),
  }
}

function Sidebar(props) {
  const links = props.links.map(link => <li key={link.get('url')}><Link to={link} /></li>)
  return (
    <div className={style.sideBar} >
      <section>
        <h1>Administrera</h1>
        <ul>{links}</ul>
      </section>
    </div>
  )
}

export default connect(mapStateToProps)(Sidebar)
