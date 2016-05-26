import Immutable from 'immutable'
import reducer, { moveSlide, startEditingSlide,
  stopEditingSlide, deleteSlide, addSlide,
  setLessonTitle, setLessonDescription, setLessonIcon } from './lesson'
import { setField, setFieldIn } from './commonActions'

describe('lesson duck', () => {
  it('should create initial state', () => {
    const newState = reducer(undefined, { type: 'unknown' })
    expect(newState).equal(Immutable.fromJS({ title: '', description: '', slides: [] }))
  })

  it('should set slide text', () => {
    const newText = 'new content'
    const targetIndex = 0
    const targetSlide = { text: 'old content' }
    const otherSlide = { text: 'nothing interesting' }
    const newState = reducer(Immutable.fromJS(
      { title: '', _id: '123', description: '', slides: [targetSlide, otherSlide] }),
      setFieldIn('123', ['slides', targetIndex, 'text'], newText))
    expect(newState).equal(
      Immutable.fromJS({ title: '', _id: '123', description: '', slides: [{ text: newText }, otherSlide] }))
  })

  it('should move slide upwards', () => {
    const toIndex = 0
    const fromIndex = 1
    const targetSlide = { text: 'old content' }
    const otherSlide = { text: 'nothing interesting' }
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', slides: [targetSlide, otherSlide] }),
      moveSlide(fromIndex, toIndex))
    expect(newState).equal(Immutable.fromJS(
      { title: '', description: '', slides: [otherSlide, targetSlide] }))
  })

  it('should move slide downwards', () => {
    const toIndex = 1
    const fromIndex = 0
    const targetSlide = { text: 'old content' }
    const otherSlide = { text: 'nothing interesting' }
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', slides: [targetSlide, otherSlide] }),
      moveSlide(fromIndex, toIndex))
    expect(newState).equal(Immutable.fromJS(
      { title: '', description: '', slides: [otherSlide, targetSlide] }))
  })

  it('should set slide as editing', () => {
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', slides: [{ text: 'old content' }] }),
      startEditingSlide(0))
    expect(newState).equal(Immutable.fromJS(
      { title: '', description: '', slides: [{ text: 'old content', editing: true }] }))
  })

  it('should stop editing slide', () => {
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', slides: [{ text: 'old content' }] }),
      stopEditingSlide(0))
    expect(newState).equal(Immutable.fromJS(
      { title: '', description: '', slides: [{ text: 'old content', editing: false }] }))
  })

  it('should stop editing other slide', () => {
    const newState = reducer(Immutable.fromJS(
      {
        title: '',
        description: '',
        slides: [
          { text: 'old content', editing: true },
          { text: 'other content' },
        ],
      }),
      startEditingSlide(1))
    expect(newState).equal(Immutable.fromJS(
      {
        title: '',
        description: '',
        slides: [{ text: 'old content', editing: false }, { text: 'other content', editing: true }],
      }))
  })

  it('should stop editing other slide', () => {
    const newState = reducer(Immutable.fromJS(
      {
        title: '',
        description: '',
        slides: [
          { text: 'old content', editing: true },
          { text: 'other content' },
        ],
      }),
      startEditingSlide(1)
    )
    expect(newState).equal(Immutable.fromJS(
      {
        title: '',
        description: '',
        slides: [{ text: 'old content', editing: false }, { text: 'other content', editing: true }],
      }))
  })

  it('should remove slide', () => {
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', slides: [{ text: 'old content' }, { text: 'other content' }] }),
      deleteSlide(0))
    expect(newState).equal(Immutable.fromJS(
      { title: '', description: '', slides: [{ text: 'other content' }] }))
  })

  it('should add a slide to the end', () => {
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', slides: [{ text: 'old content' }] }),
      addSlide())
    expect(newState).equal(Immutable.fromJS(
      { title: '', description: '', slides: [{ text: 'old content' }, { text: '' }] }))
  })

  it('should set the lesson description', () => {
    const description = 'a rather short description'
    const newState = reducer(Immutable.fromJS(
      { title: '', _id: '123', description: '', slides: [{ text: 'old content' }] }),
      setField('123', 'description', description))
    expect(newState).equal(Immutable.fromJS(
      { title: '', _id: '123', description, slides: [{ text: 'old content' }] }))
  })

  it('should set lesson title', () => {
    const title = 'a title'
    const newState = reducer(Immutable.fromJS(
      { title: '', _id: '123', description: '', slides: [{ text: 'old content' }] }),
      setField('123', 'title', title))
    expect(newState).equal(Immutable.fromJS(
      { title, _id: '123', description: '', slides: [{ text: 'old content' }] }))
  })

  it('should set lesson icon', () => {
    const newState = reducer(Immutable.fromJS(
      { title: '', _id: '123', description: '', icon: null, slides: [] }),
      setField('123', 'icon',{}))

    expect(newState.get('icon')).to.exist()
  })

})
