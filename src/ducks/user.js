import I from 'immutable'

const LOGIN = 'planck/user/login'
const LOGOUT = 'planck/user/logout'

const initialState = I.fromJS({jwt:'', payload:{}})

const actions = {
  [LOGIN](state, action) {},
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
    jwt
  }
}
