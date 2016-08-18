import React from 'react'
const styles = require('./HomePage.less')
export default (props) => {
  const {login} = props
  return (
    <div>
      <form>
        <label>Användarnamn
          <input type="text"></input>
        </label>
        <label>Lösenord
          <input className={styles.password} type="password"></input>
        </label>
        <button onClick={login}>Logga in</button>
      </form>
    </div>
  )
}
