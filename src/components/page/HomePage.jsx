import React from 'react'
const styles = require('./HomePage.less')
export default (props) => {
  const {login} = props
  return (
  <div className={styles.loginpage}>
  <h1 className={styles.title}>PLANCK</h1>
  <h3 className={styles.subtitle}>L E A R N I N G</h3>
      <form className={styles.loginform}>
        <input type="text" placeholder="Namn"></input>
        <input className={styles.password} type="password" placeholder="Lösenord"></input>
        <button className={styles.loginBtn} onClick={login}>Logga in</button>
        <p className={styles.message}>Inte registrerad? <a className={styles.createAccountText} href="#">Skapa ett konto</a></p>
      </form>
  </div>
  )
}
