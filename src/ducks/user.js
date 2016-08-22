import I from 'immutable'
import jsonWebToken from 'jsonwebtoken'

const LOGIN = 'planck/user/login'
const LOGOUT = 'planck/user/logout'
const ERROR = 'planck/user/error'

const initialState = I.fromJS({jwt:'', payload:{}})

const actions = {
  [LOGIN](state, action) {
    const jwt = action.payload.jwt
    const payload = jsonWebToken.decode(jwt)
    return state.set('jwt', jwt).set('payload', I.fromJS(payload))
  },
  [LOGOUT](state, action) {
    return initialState
  },
  [ERROR](state, action) {
    return state.set('error', action.payload.message)
  }
}

export default function reducer(state = initialState, action) {
  if (actions[action.type]) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}

export function login(jwt) {
  return {
    type: LOGIN, payload: { jwt },
  }
}

export function logout() {
  return {
    type: LOGOUT,
  }
}

export function error(message) {
  return {
    type: ERROR, error: true, payload: { message }
  }
}
