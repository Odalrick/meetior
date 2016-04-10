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
    const slideId = 0
    const newState = reducer(Immutable.fromJS([
      {_id: slideId, content: 'old content'}]), editSlideContent(courseId, slideId, newContent))
    expect(newState).equal(
      Immutable.fromJS([{_id: slideId, content: newContent}]))
  })
})
