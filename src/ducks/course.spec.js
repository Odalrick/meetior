import Immutable from 'immutable'
import reducer, { setField, moveLesson, deleteLesson } from './course'

describe('course duck', () => {
  it('should create initial state', () => {
    const newState = reducer(undefined, { type: 'unknown' })
    expect(newState).equal(Immutable.fromJS({ title: '', description: '', lessons: [] }))
  })

  it('should move lesson upwards', () => {
    const toIndex = 0
    const fromIndex = 1
    const targetLesson = { text: 'old content' }
    const otherLesson = { text: 'nothing interesting' }
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', lessons: [targetLesson, otherLesson] }),
      moveLesson(fromIndex, toIndex))
    expect(newState).equal(Immutable.fromJS(
      { title: '', description: '', lessons: [otherLesson, targetLesson] }))
  })

  it('should move lesson downwards', () => {
    const toIndex = 1
    const fromIndex = 0
    const targetLesson = { text: 'old content' }
    const otherLesson = { text: 'nothing interesting' }
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', lessons: [targetLesson, otherLesson] }),
      moveLesson(fromIndex, toIndex))
    expect(newState).equal(Immutable.fromJS(
      { title: '', description: '', lessons: [otherLesson, targetLesson] }))
  })

  it('should set the course description', () => {
    const description = 'a rather short description'
    const setCourseDescription = setField('description')
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', lessons: [{ text: 'old content' }] }),
      setCourseDescription(description))
    expect(newState).equal(Immutable.fromJS(
      { title: '', description, lessons: [{ text: 'old content' }] }))
  })

  it('should set course title', () => {
    const title = 'a title'
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', lessons: [{ text: 'old content' }] }),
      setField('title', title))
    expect(newState).equal(Immutable.fromJS(
      { title, description: '', lessons: [{ text: 'old content' }] }))
  })

  it('should set course icon', () => {
    const setCourseIcon = setField('icon')
    const newState = reducer(Immutable.fromJS(
      { title: '', description: '', icon: null, lessons: [] }),
      setCourseIcon({})
    )
    expect(newState.get('icon')).to.exist()
  })
})
