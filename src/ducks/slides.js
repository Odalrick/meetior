import Immutable from 'immutable'

const EDIT_SLIDE_CONTENT = 'planck/slides/EDIT_SLIDE_CONTENT'

const initialState = Immutable.List()

export default function reducer(state = initialState, action) {
  if (actions[action.type]) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}

const actions = {
  [EDIT_SLIDE_CONTENT](state, action) {
    return state.updateIn(
      [state.indexOf(s => s._id === action.payload._id), 'content'],
      () => action.payload.newContent)
  },
}

export function editSlideContent(courseId, slideId, newContent) {
  return {
    type: EDIT_SLIDE_CONTENT, payload: {courseId, slideId, newContent}
  }
}
