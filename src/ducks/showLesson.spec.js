import Immutable from 'immutable'
import R from 'ramda'
import reducer, {addLesson, showLesson, showSlide} from './showLesson'

describe('showLessons duck', ()=> {
  const buildState = R.reduce(reducer, undefined)
  const lessonJsNulliPotentus = {
    title: 'Nulli potentus',
    slides: [
      {
        text: '<h1>Neutrum vero, inquit ille.</h1>&hellip;',
      },
      {
        text: '<h1>Apparet statim, quae sint officia, quae actiones.</h1>&hellip;',
      },
      {
        text: '<h1>Non est ista, inquam, Piso, magna dissensio.</h1>&hellip;',
      },
    ],
    _id: '123',
  }

  it('should create initial state', () => {
    const newState = reducer(undefined, {type: 'bubbel blä'})
    expect(newState).equal(Immutable.fromJS({lessons: []}))
  })

  it('should add viewable lesson', ()=> {
    const initialState = Immutable.fromJS({lessons: []})

    const newState = reducer(initialState, addLesson({
      title: 'test',
      _id: '123',
    }))

    const expectedState = Immutable.fromJS({
      lessons: [
        {
          title: 'test',
          _id: '123',
        },
      ],
    })

    expect(newState).equal(expectedState)
  })

  it('should not add same lesson twice', ()=> {
    const newState = buildState([
      addLesson({
        title: 'test',
        _id: '123',
      }),
      addLesson({
        title: 'test',
        _id: '123',
      }),
    ])

    const expectedState = Immutable.fromJS({
      lessons: [
        {
          title: 'test',
          _id: '123',
        },
      ],
    })

    expect(newState).equal(expectedState)
  })

  it('should switch to view mode', ()=> {
    const newState = buildState([
      addLesson(lessonJsNulliPotentus),
      addLesson({
        title: 'test 2',
        _id: '132',
      }),
      showLesson(lessonJsNulliPotentus),
    ])

    const expectedState = Immutable.fromJS({
      lessons: [
        {
          title: lessonJsNulliPotentus.title,
          _id: lessonJsNulliPotentus._id,
        },
        {
          title: 'test 2',
          _id: '132',
        },
      ],
      show: lessonJsNulliPotentus,
      index: 0,
    })

    expect(newState).equal(expectedState)
  })

  it('should switch slide', ()=> {
    const oldState = buildState([
      addLesson(lessonJsNulliPotentus),
      addLesson({
        title: 'test 2',
        _id: '132',
      }),
      showLesson(lessonJsNulliPotentus),
    ])

    const expectedState = oldState.set('index', 3)

    const newState = reducer(oldState, showSlide(3))

    expect(newState).equal(expectedState)
  })
})
