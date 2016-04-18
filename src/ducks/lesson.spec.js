import Immutable from 'immutable'
import reducer,{setSlideText, moveSlide, startEditingSlide, stopEditingSlide} from './lesson'

describe('lesson duck', ()=> {
  it('should create initial state', () => {
    const newState = reducer(undefined, {type: 'unknown',})
    expect(newState).equal(Immutable.fromJS({name: '', description: '', slides: []}))
  })

  it('should set slide text', () => {
    const newText = 'new content'
    const targetIndex = 0
    const targetSlide = {text: 'old content'}
    const otherSlide = {text: 'nothing interesting'}
    const newState = reducer(Immutable.fromJS(
      {name: '', description: '', slides: [targetSlide, otherSlide]}),
      setSlideText(targetIndex, newText))
    expect(newState).equal(
      Immutable.fromJS({name: '', description: '', slides: [{text: newText}, otherSlide]}))
  })

  it('should move slide upwards', () => {
    const toIndex = 0
    const fromIndex = 1
    const targetSlide = {text: 'old content'}
    const otherSlide = {text: 'nothing interesting'}
    const newState = reducer(Immutable.fromJS(
      {name: '', description: '', slides: [targetSlide, otherSlide]}),
      moveSlide(fromIndex, toIndex))
    expect(newState).equal(Immutable.fromJS(
      {name: '', description: '', slides: [otherSlide, targetSlide]}))
  });

  it('should move slide downwards', () => {
    const toIndex = 1
    const fromIndex = 0
    const targetSlide = {text: 'old content'}
    const otherSlide = {text: 'nothing interesting'}
    const newState = reducer(Immutable.fromJS(
      {name: '', description: '', slides: [targetSlide, otherSlide]}),
      moveSlide(fromIndex, toIndex))
    expect(newState).equal(Immutable.fromJS(
      {name: '', description: '', slides: [otherSlide, targetSlide]}))
  });

  it('should set slide as editing', () => {
    const newState = reducer(Immutable.fromJS(
      {name: '', description: '', slides: [{text: 'old content'}]}),
      startEditingSlide(0))
    expect(newState).equal(Immutable.fromJS(
      {name: '', description: '', slides: [{text: 'old content', editing: true}]}))
  })
  it('should stop editing slide', () => {
    const newState = reducer(Immutable.fromJS(
      {name: '', description: '', slides: [{text: 'old content'}]}),
      stopEditingSlide(0))
    expect(newState).equal(Immutable.fromJS(
      {name: '', description: '', slides: [{text: 'old content', editing: false}]}))
  })
  it('should stop editing other slide', () => {
    const newState = reducer(Immutable.fromJS(
      {name: '', description: '', slides: [{text: 'old content', editing: true}, {text:'other content'}]}),
      startEditingSlide(1))
    expect(newState).equal(Immutable.fromJS(
      {name: '', description: '', slides: [{text: 'old content', editing: false}, {text:'other content', editing: true}]}))
  })
})
