import I from 'immutable'
import { makeSearchLink } from '../lib/navigation'

const SET_SEARCH_TEXT = 'planck/search/SET_SEARCH_TEXT'

const initialState = I.fromJS({ searchText: '', queryLink: {} })

const actions = {
  [SET_SEARCH_TEXT](state, action) {
    return state
      .set('searchText', action.payload.searchText)
      .set('queryLink', makeSearchLink(action.payload.searchText))
  },
}

export default function reducer(state = initialState, action) {
  if (actions[action.type]) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}
export function setSearchText(searchText) {
  return {
    type: SET_SEARCH_TEXT, payload: { searchText },
  }
}
