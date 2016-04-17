import Immutable from 'immutable'
import reducer,{setSlideContent, moveSlide} from './lesson'

describe('lesson duck', ()=> {
  it('should create initial state', () => {
    const newState = reducer(undefined, {type: 'unknown',})
    expect(newState).equal(Immutable.fromJS({name:'', description:'', slides: []}))
  })

  it('should set slide text', () => {
    const newText = 'new content'
    const targetIndex = 0
    const targetSlide = {text: 'old content'}
    const otherSlide = {text: 'nothing interesting'}
    const newState = reducer(Immutable.fromJS(
        {name: '', description: '', slides: [targetSlide, otherSlide]}),
      setSlideContent(targetIndex, newText))
    expect(newState).equal(
      Immutable.fromJS({name: '', description: '', slides: [{text: newText}, otherSlide]}))
  })

  it('should move slide to the new position', () => {
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

})
