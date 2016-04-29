import Immutable from 'immutable'

const SET_TAG_FILTER = 'planck/lesson/SET_TAG_FILTER'

const initialState = Immutable.fromJS(
	{tags: [], tagFilter: '', filteredTags: []})

export default function reducer(state = initialState, action) {
  if (actions[action.type]) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}

const actions = {
  [SET_TAG_FILTER](state, action) {
    return state
  },
}

export function setTagFilter(newTagFilter) {
  return {
    type: SET_TAG_FILTER, payload: {newTagFilter},
  }
}
