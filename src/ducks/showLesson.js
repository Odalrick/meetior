import Immutable from 'immutable'

const PREFIX = 'planck/lesson'
const ADD_LESSON = `${PREFIX}/ADD_LESSON`
const SHOW_LESSON = `${PREFIX}/SHOW_LESSON`
const SHOW_SLIDE = `${PREFIX}/SHOW_SLIDE`

const initialState = Immutable.fromJS({lessons: []})

const actions = {
  [ADD_LESSON](state, {payload: {title, _id}}) {
    const lesson = Immutable.Map({_id, title})
    return state.update('lessons',
      lessons => lessons.contains(lesson) ? lessons : lessons.push(lesson)
    )
  },
  [SHOW_LESSON](state, {payload: lesson}) {
    const lessonI = Immutable.fromJS(lesson)
    return state.set('show', lessonI).set('index', 0)
  },
  [SHOW_SLIDE](state, {payload: {index}}) {
    return state.set('index', index)
  },
}

export default function reducer(state = initialState, action) {
  if (actions[action.type]) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}

export function addLesson({title, _id}) {
  return {
    type: ADD_LESSON,
    payload: {
      title,
      _id,
    },
  }
}

export function showLesson(lesson) {
  return {
    type: SHOW_LESSON,
    payload: lesson,
  }
}

export function showSlide(index) {
  return {
    type: SHOW_SLIDE,
    payload: {index},
  }
}
