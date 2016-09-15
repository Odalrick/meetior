import React from 'react'
import { connect } from 'react-redux'
const styles = require('./HomePage.less')

import {loginDispatch} from '../../ducks/commonActions'

function mapStateToProps(state, ownProps) {
  return {
    loggedIn: state.user.get('role') !== 'anonymous',
    pendingLogin: state.user.get('pending', false)
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    login: loginDispatch(dispatch)
  }
}

function HomePage(props){
  let nameInput = null
  let passInput = null
  const login = (e) => {
    e.preventDefault()
    const url = `${window.location.protocol}//${window.location.host}/login`
    props.login(url, nameInput.value, passInput.value)
  }
  return (
  <div className={styles.loginpage}>
  <h1 className={styles.title}>PLANCK</h1>
  <h3 className={styles.subtitle}>L E A R N I N G</h3>
      <form className={styles.loginform}>
        <input type="text" placeholder="Namn" ref={(ref) => nameInput = ref }></input>
        <input className={styles.password} type="password" placeholder="Lösenord" ref={(ref) => passInput = ref}></input>
        <button className={styles.loginBtn} onClick={login}>Logga in</button>
        <p className={styles.message}>Inte registrerad? <a className={styles.createAccountText} href="#">Skapa ett konto</a></p>
      </form>
  </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
