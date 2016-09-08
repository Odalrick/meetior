import I from 'immutable'

const LOGIN = 'planck/user/login'
const SET_PENDING = 'planck/user/SET_PENDING'
const ERROR = 'planck/user/error'

const initialState = I.fromJS({role: ''})

const actions = {
  [LOGIN](state, action) {
    const role = action.payload.role
    return state.set('role', role).delete('pending')
  },
  [SET_PENDING](state, action) {
    return state.set('pending', true)
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

export function login(role) {
  return {
    type: LOGIN, payload: { role },
  }
}

export function setPending() {
  return {
    type: SET_PENDING
  }
}

export function error(message) {
  return {
    type: ERROR, error: true, payload: { message }
  }
}
