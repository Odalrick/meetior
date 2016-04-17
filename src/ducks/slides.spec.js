import Immutable from 'immutable'
import reducer, {editSlideContent, moveSlide,} from './slides'

describe('slide duck', ()=> {
  it('should create initial state', () => {
    const newState = reducer(undefined, {type: 'unknown',})
    expect(newState).equal(Immutable.List())
  })

  it('should edit slide content', () => {
    const newContent = 'new content'
    const courseId = 0
    const targetId = 0
    const targetSlide = {_id: targetId, content: 'old content'}
    const otherSlide = {_id: 999, content: 'nothing interesting'}
    const newState = reducer(Immutable.fromJS([targetSlide, otherSlide]),
      editSlideContent(courseId, targetId, newContent))
    expect(newState).equal(
      Immutable.fromJS([{_id: targetId, content: newContent}, otherSlide]))
  })

  it('should move slide to new position', () => {
    const newPosition = 0
    const courseId = 0
    const targetId = 0
    const targetSlide = {_id: targetId, position: 1}
    const otherSlide = {_id: 999, position: 0}
    const newState = reducer(Immutable.fromJS([targetSlide, otherSlide]),
      moveSlide(courseId, targetId, newPosition))
    expect(newState).equal(
      Immutable.fromJS([
        {_id: targetId, position: newPosition},
        {_id: targetId, position: otherSlide.position + 1}
      ]))
  });

})
