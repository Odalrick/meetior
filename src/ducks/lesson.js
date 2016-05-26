import Immutable from 'immutable'
import R from 'ramda'

import { SET_FIELD, SET_FIELD_IN } from './commonActions'

const MOVE_SLIDE = 'planck/lesson/MOVE_SLIDE'
const START_EDITING_SLIDE = 'planck/lesson/START_EDITING_SLIDE'
const STOP_EDITING_SLIDE = 'planck/lesson/STOP_EDITING_SLIDE'
const DELETE_SLIDE = 'planck/lesson/DELETE_SLIDE'
const ADD_SLIDE = 'planck/lesson/ADD_SLIDE'
const ADD_TAG = 'planck/lesson/ADD_TAG'
const REMOVE_TAG = 'planck/lesson/REMOVE_TAG'

const initialState = Immutable.fromJS({ title: '', description: '', slides: [] })

const actions = {
  [SET_FIELD](state, action) {
    if (state.get('_id') === action.payload._id) {
      return state.set(action.payload.field, action.payload.value)
    } else {
      return state
    }
  },
  [SET_FIELD_IN](state, action) {
    if (state.get('_id') === action.payload._id) {
      return state.setIn(action.payload.path, action.payload.value)
    } else {
      return state
    }
  },
  [MOVE_SLIDE](state, action) {
    const toIndex = action.payload.toIndex
    const fromIndex = action.payload.fromIndex

    return state.updateIn(
      ['slides'], (slides) => {
        const slideToMove = state.get('slides').get(fromIndex)
        return slides
          .remove(fromIndex)
          .insert(toIndex, slideToMove)
      })
  },
  [START_EDITING_SLIDE](state, action) {
    return state.updateIn(
      ['slides'], (slides) => Immutable.fromJS(
        slides.toJS().map(
          (slide, i) => R.assoc('editing', action.payload.slideIndex === i)(slide)
        )
      )
    )
  },
  [STOP_EDITING_SLIDE](state, action) {
    return state.updateIn(
      ['slides', action.payload.slideIndex, 'editing'], () => false)
  },
  [DELETE_SLIDE](state, action) {
    return state.deleteIn(
      ['slides', action.payload.slideIndex])
  },
  [ADD_SLIDE](state) {
    return state.updateIn(
      ['slides'], (slides) => slides.push(Immutable.fromJS({ text: '' })))
  },
}

export default function reducer(state = initialState, action) {
  if (actions[action.type]) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}

export function setLessonTitle(newTitle) {
  return {
    type: SET_LESSON_TITLE, payload: { newTitle },
  }
}

export function setLessonDescription(newDescription) {
  return {
    type: SET_LESSON_DESCRIPTION, payload: { newDescription },
  }
}

export function setLessonIcon(newIcon) {
  return {
    type: SET_LESSON_ICON, payload: { newIcon },
  }
}

export function setSlideText(slideIndex, newText) {
  return {
    type: SET_SLIDE_TEXT, payload: { slideIndex, newText },
  }
}

export function moveSlide(fromIndex, toIndex) {
  return {
    type: MOVE_SLIDE, payload: { fromIndex, toIndex },
  }
}

export function startEditingSlide(slideIndex) {
  return {
    type: START_EDITING_SLIDE, payload: { slideIndex },
  }
}

export function stopEditingSlide(slideIndex) {
  return {
    type: STOP_EDITING_SLIDE, payload: { slideIndex },
  }
}

export function deleteSlide(slideIndex) {
  return {
    type: DELETE_SLIDE, payload: { slideIndex },
  }
}

export function addSlide() {
  return {
    type: ADD_SLIDE, payload: {},
  }
}
