/* global window: false */
import React from 'react'
import { connect } from 'react-redux'
const styles = require('./HomePage.less')

import { loginDispatch } from '../../ducks/commonActions'

function mapStateToProps(state) {
  return {
    role: state.user.get('role'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: loginDispatch(dispatch),
  }
}

function HomePage(props) {
  let nameInput
  let passInput
  const login = (e) => {
    e.preventDefault()
    const url = `${window.location.protocol}//${window.location.host}/login`
    props.login(url, nameInput.value, passInput.value, null)
  }
  return (
    <div className={styles.loginpage} >
      <h1 className={styles.title} >PLANCK</h1>
      <h3 className={styles.subtitle} >L E A R N I N G</h3>
      <div>Welcome as a {props.role} user!</div>
      <form className={styles.loginform} >
        <input type="text" placeholder="Namn" ref={(ref) => {nameInput = ref}} />
        <input
          className={styles.password}
          type="password"
          placeholder="Lösenord"
          ref={(ref) => { passInput = ref}}
        />
        <button className={styles.loginBtn} onClick={login} >Logga in</button>
        <p className={styles.message} >Inte registrerad?
          <a className={styles.createAccountText} href="#" >Skapa ett konto</a>
        </p>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
