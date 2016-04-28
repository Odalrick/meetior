import Immutable from 'immutable'

const SET_LESSON_TITLE = 'planck/lesson/SET_LESSON_TITLE'
const SET_LESSON_DESCRIPTION = 'planck/lesson/SET_LESSON_DESCRIPTION'
const SET_LESSON_ICON = 'planck/lesson/SET_LESSON_ICON'
const SET_SLIDE_TEXT = 'planck/lesson/SET_SLIDE_TEXT'
const MOVE_SLIDE = 'planck/lesson/MOVE_SLIDE'
const START_EDITING_SLIDE = 'planck/lesson/START_EDITING_SLIDE'
const STOP_EDITING_SLIDE = 'planck/lesson/STOP_EDITING_SLIDE'
const DELETE_SLIDE =  'planck/lesson/DELETE_SLIDE'
const ADD_SLIDE =  'planck/lesson/ADD_SLIDE'
const ADD_TAG =  'planck/lesson/ADD_TAG'
const REMOVE_TAG =  'planck/lesson/REMOVE_TAG'

const initialState = Immutable.fromJS({
  "title": "Nulli potentus",
  "description": "short and sweet",
  "slides": [
    {
      "text": "<h1>Neutrum vero, inquit ille.</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est enim\n      effectrix multarum et magnarum voluptatum. Proclivi currit oratio. Quid\n      ad utilitatem tantae pecuniae? Non est igitur voluptas bonum. </p>\n      <p>Sed nimis multa. Inquit, dasne adolescenti veniam? Quis enim redargueret?\n      Quibusnam praeteritis? </p>\n<ul>\n  <li>Si enim ad populum me vocas,\n      eum.</li>\n  <li>Te autem hortamur omnes, currentem quidem, ut spero, ut eos, quos novisse vis,\n   imitari etiam velis.</li>\n  <li>Atqui perspicuum est hominem e corpore animoque constare, cum primae sint animi\n  partes, secundae corporis.</li>\n  <li>Qui autem esse poteris, nisi te amor ipse ceperit?</li>\n  <li>Semper enim ita adsumit aliquid, ut ea, quae prima dederit, non deserat.</li>\n</ul>\n<p>Quis negat? Sedulo, inquam, faciam. Duo Reges: constructio interrete. Negat enim\nsummo bono afferre incrementum diem. Is es profecto tu. Ne discipulum abducam, times.\n</p>\n\n"
    },
    {
      "text": "<h1>Apparet statim, quae sint officia, quae actiones.</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proclivi currit oratio.\nNihil ad rem! Ne sit sane; Age sane, inquam. Sed tamen intellego quid velit. Duo Reges:\nconstructio interrete. </p>\n\n<ul>\n  <li>Cum sciret confestim esse moriendum eamque mortem ardentiore studio peteret, quam\n  Epicurus voluptatem petendam putat.</li>\n  <li>Quae qui non vident, nihil umquam magnum ac cognitione dignum amaverunt.</li>\n  <li>Ut proverbia non nulla veriora sint quam vestra dogmata.</li>\n  <li>Unum nescio, quo modo possit, si luxuriosus sit, finitas cupiditates habere.</li>\n</ul>\n\n\n<p>Memini me adesse P. Sed fortuna fortis; Sullae consulatum? Ita nemo beato beatior.\n </p>\n\n<p>Efficiens dici potest. Primum Theophrasti, Strato, physicum se voluit; Recte dicis;\nSed in rebus apertissimis nimium longi sumus. </p>\n\n"
    },
    {
      "text": "<h1>Non est ista, inquam, Piso, magna dissensio.</h1>\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin aliud quid voles,\npostea. Sed fortuna fortis; Cur iustitia laudatur? Duo Reges: constructio interrete. </p>\n\n<ul>\n  <li>Quid ergo hoc loco intellegit honestum?</li>\n  <li>Nobis aliter videtur, recte secusne, postea;</li>\n  <li>Sequitur disserendi ratio cognitioque naturae;</li>\n  <li>Quis animo aequo videt eum, quem inpure ac flagitiose putet vivere?</li>\n</ul>\n\n\n<p>Paria sunt igitur. Ut aliquid scire se gaudeant? Haec dicuntur fortasse ieiunius;\nTubulo putas dicere? </p>\n\n<p>Eaedem res maneant alio modo. Res enim concurrent contrariae. Hoc tu nunc in illo\n probas. Eaedem res maneant alio modo. Hoc tu nunc in illo probas. </p>\n\n"
    }
  ],
  "tags": ["Kinfolk", "bird", "hoodie", "letterpress", "four", "loko", "pitchfork"],
  "_id": "eecf0a39454b4b2244ebdc3518015605"
})
//Immutable.fromJS({name: '', description: '', slides: []})

//Immutable.fromJS({title: '', description: '', slides: []})

export default function reducer(state = initialState, action) {
  if (actions[action.type]) {
    return actions[action.type](state, action)
  } else {
    return state
  }
}

const actions = {
  [SET_LESSON_TITLE](state, action) {
    return state.set('title', action.payload.newTitle)
  },
  [SET_LESSON_DESCRIPTION](state, action) {
    return state.set('description', action.payload.newDescription)
  },
  [SET_LESSON_ICON](state, action) {
    return state.set('icon', action.payload.newIcon)
  },
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
  [START_EDITING_SLIDE](state, action) {
    return state.updateIn(
      ['slides'], (slides) => {
        return Immutable.fromJS(slides.toJS().map((slide, i) => {
          slide.editing = action.payload.slideIndex === i
          return slide
        }))
      })
  },
  [STOP_EDITING_SLIDE](state, action) {
    return state.updateIn(
      ['slides', action.payload.slideIndex, 'editing'], () => false)
  },
  [DELETE_SLIDE](state, action) {
    return state.deleteIn(
      ['slides', action.payload.slideIndex])
  },
  [ADD_SLIDE](state, action) {
    return state.updateIn(
      ['slides'], (slides) => slides.push(Immutable.fromJS({text:''})))
  },
  [ADD_TAG](state, action) {
    return state.updateIn(
      ['tags'], (tags) => tags.push(action.payload.tag))
  },
  [REMOVE_TAG](state, action) {
    return state.updateIn(
      ['tags'], (tags) => tags.delete(tags.findIndex(t => t === action.payload.tag)))
  }
}

export function setLessonTitle(newTitle) {
  return {
    type: SET_LESSON_TITLE, payload: {newTitle}
  }
}

export function setLessonDescription(newDescription) {
  return {
    type: SET_LESSON_DESCRIPTION, payload: {newDescription}
  }
}

export function setLessonIcon(newIcon) {
  return {
    type: SET_LESSON_ICON, payload: {newIcon}
  }
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

export function stopEditingSlide(slideIndex) {
  return {
    type: STOP_EDITING_SLIDE, payload: {slideIndex}
  }
}

export function deleteSlide(slideIndex) {
  return {
    type: DELETE_SLIDE, payload: {slideIndex}
  }
}

export function addSlide() {
  return {
    type: ADD_SLIDE, payload: {}
  }
}

export function addTag(tag) {
  return {
    type: ADD_TAG, payload: {tag}
  }
}
export function removeTag(tag) {
  return {
    type: REMOVE_TAG, payload: {tag}
  }
}

