import Immutable from 'immutable'
import reducer, {editSlideContent,} from './slides'

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
      Immutable.fromJS(Immutable.fromJS([{_id: targetId, content: newContent}, otherSlide])))
  })

})
