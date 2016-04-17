import Immutable from 'immutable'

const EDIT_SLIDE_CONTENT = 'planck/slides/EDIT_SLIDE_CONTENT'
const MOVE_SLIDE = 'planck/slides/MOVE_SLIDE'

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
      [state.findIndex(s => s.get('_id') === action.payload.slideId), 'content'],
      () => action.payload.newContent)
  },
  [MOVE_SLIDE](state, action) {
    const intermediaryState = state.updateIn(
      [state.findIndex(s => s.get('_id') === action.payload.slideId), 'position'],
      () => action.payload.newPosition)

  },
}

export function editSlideContent(courseId, slideId, newContent) {
  return {
    type: EDIT_SLIDE_CONTENT, payload: {courseId, slideId, newContent}
  }
}

export function moveSlide(courseId, slideId, newPosition) {
  return {
    type: MOVE_SLIDE, payload: {courseId, slideId, newPosition}
  }
}
