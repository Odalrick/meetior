import Immutable from 'immutable'

const SET_SLIDE_TEXT = 'planck/lesson/SET_SLIDE_TEXT'
const MOVE_SLIDE = 'planck/lesson/MOVE_SLIDE'
const START_EDITING_SLIDE = 'planck/lesson/START_EDITING_SLIDE'

const initialState = Immutable.fromJS({name:'',description:'',slides:[]})

export default function reducer(state = initialState, action) {
  if (actions[action.type]) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}

const actions = {
  [SET_SLIDE_TEXT](state, action) {
    return state.updateIn(
      ['slides', action.payload.slideIndex, 'text'],
      () => action.payload.newText)
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
}

export function setSlideText(slideIndex, newText) {
  return {
    type: SET_SLIDE_TEXT, payload: {slideIndex, newText}
  }
}

export function moveSlide(fromIndex, toIndex) {
  return {
    type: MOVE_SLIDE, payload: {fromIndex, toIndex}
  }
}

export function startEditingSlide(slideIndex) {
  return {
    type: START_EDITING_SLIDE, payload: {slideIndex}
  }
}
