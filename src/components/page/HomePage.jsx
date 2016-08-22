import React from 'react'
import { connect } from 'react-redux'
const styles = require('./HomePage.less')

import {login, logout} from '../../ducks/user'

function mapStateToProps(state, ownProps) {
  return {
    payload: state.user.get('payload'),
    error: state.user.get('error')
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    login: (event) => {
        dispatch(login ('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ'))
        event.preventDefault()
    },
    logout: (event) => {
      dispatch(logout())
      event.preventDefault()
    }
  }
}

function HomePage(props){
  const {login, payload, error} = props
  return (
    payload.isEmpty() ?
      <div>
        <form>
          <label>Användarnamn
            <input type="text"></input>
          </label>
          <label>Lösenord
            <input className={styles.password} type="password"></input>
          </label>
          <button onClick={login}>Logga in</button>
          <p>{error}</p>
        </form>
      </div> : <p>Inloggad som {payload.get('name')}!</p>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
