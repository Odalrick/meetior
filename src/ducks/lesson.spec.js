import Immutable from 'immutable'
import reducer, { setSlideText, moveSlide, startEditingSlide,
  stopEditingSlide, deleteSlide, addSlide,
  setLessonTitle, setLessonDescription, setLessonIcon,
  addTag, removeTag } from './lesson'

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
      { title: '', description: '', slides: [targetSlide, otherSlide] }),
      setSlideText(targetIndex, newText))
    expect(newState).equal(
      Immutable.fromJS({ title: '', description: '', slides: [{ text: newText }, otherSlide] }))
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
      { title: '', description: '', slides: [{ text: 'old content' }] }),
      setLessonDescription(description))
    expect(newState).equal(Immutable.fromJS(
      { title: '', description, slides: [{ text: 'old content' }] }))
  })

  it('should set lesson title', () => {
    const title = 'a title'
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', slides: [{ text: 'old content' }] }),
      setLessonTitle(title))
    expect(newState).equal(Immutable.fromJS(
      { title, description: '', slides: [{ text: 'old content' }] }))
  })

  it('should set lesson icon', () => {
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', icon: null, slides: [] }),
      setLessonIcon({})
    )
    expect(newState.get('icon')).to.exist()
  })

  it('should add a tag', () => {
    const tag = 'bacon'
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', tags: [], slides: [{ text: 'old content' }] }),
      addTag(tag))
    expect(newState).equal(Immutable.fromJS(
      { title: '', description: '', tags: [tag], slides: [{ text: 'old content' }] }))
  })

  it('should remove a tag', () => {
    const tag = 'bacon'
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', tags: ['salami', tag], slides: [{ text: 'old content' }] }),
      removeTag(tag))
    expect(newState).equal(Immutable.fromJS(
      { title: '', description: '', tags: ['salami'], slides: [{ text: 'old content' }] }))
  })
})
