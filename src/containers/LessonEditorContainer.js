import { connect } from 'react-redux'

import Immutable from 'immutable'
import LessonEditor from '../components/edit/LessonEditor'
import {setLessonTitle, setLessonDescription, setLessonIcon,
  setSlideText, moveSlide, startEditingSlide, stopEditingSlide,
  deleteSlide, addSlide, addTag, removeTag} from '../ducks/lesson'

function mapStateToProps(state, ownProps) {
  console.log('GODAWFUL HACK, JUST TO GET THINGS ROLLING! WILL NOT WORK REMOVE ASAP!!!!!!!')
  const lesson = state.course.get('lessons').find((l) => l.get('_id') === ownProps.params.lessonId)  
  return {
    lesson,
    slides: lesson.get('slides'),
    tags: Immutable.fromJS(['Tacos', 'cray', 'gluten-free'])
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setLessonTitle: (newTitle) => dispatch(setLessonTitle(newTitle)),
    setLessonDescription: (newDescription) => dispatch(setLessonDescription(newDescription)),
    setLessonIcon: (newIcon) => dispatch(setLessonIcon(newIcon)),
    addTag: (tag) => dispatch(addTag(tag)),
    removeTag: (tag) => dispatch(removeTag(tag)),
    setSlideText: (slideIndex, newText) => dispatch(setSlideText(slideIndex, newText)),
    moveSlide: (fromIndex, toIndex) => dispatch(moveSlide(fromIndex, toIndex)),
    startEditingSlide: (slideIndex) => dispatch(startEditingSlide(slideIndex)),
    stopEditingSlide: (slideIndex) => dispatch(stopEditingSlide(slideIndex)),
    deleteSlide: (slideIndex) => dispatch(deleteSlide(slideIndex)),
    addSlide: () => dispatch(addSlide())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonEditor)
