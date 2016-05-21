import Immutable from 'immutable'
import R from 'ramda'

const SET_FIELD = 'planck/course/SET_FIELD'
const MOVE_LESSON = 'planck/course/MOVE_LESSON'
const DELETE_LESSON = 'planck/course/DELETE_LESSON'

const initialState = Immutable.fromJS({ title: '', description: '', lessons: [] })
const actions = {
  [SET_FIELD](state, action) {
    return state.set(action.payload.field, action.payload.value)
  },
  [MOVE_LESSON](state, action) {
    const toIndex = action.payload.toIndex
    const fromIndex = action.payload.fromIndex

    return state.updateIn(
      ['lessons'], (lessons) => {
        const lessonToMove = lessons.get(fromIndex)
        return lessons
          .remove(fromIndex)
          .insert(toIndex, lessonToMove)
      })
  },
  [DELETE_LESSON](state, action) {
    return state.deleteIn(
      ['lessons', action.payload.lessonIndex])
  },
}

export default function reducer(state = initialState, action) {
  if (actions[action.type]) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}

export const setField = R.curry((field, value) => ({
  type: SET_FIELD, payload: { field, value },
}))

export function moveLesson(fromIndex, toIndex) {
  return {
    type: MOVE_LESSON, payload: { fromIndex, toIndex },
  }
}

export function deleteLesson(lessonIndex) {
  return {
    type: DELETE_LESSON, payload: { lessonIndex },
  }
}
