import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import WYSIWYG from './WYSIWYG'
import {ItemTypes} from './ItemTypes'
import style from './Slide.css'

const slideSource = {
  canDrag(props, monitor){
    return !props.slide.get('editing')
  },
  beginDrag(props){
    return {
      index: props.index
    }
  }
}

const slideTarget = {
  hover(props, monitor, component){
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index
    if (dragIndex === hoverIndex)
      return

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
    const clientOffset = monitor.getClientOffset()
    const hoverClientY = clientOffset.y - hoverBoundingRect.top
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }
    props.moveSlide(dragIndex, hoverIndex)
    monitor.getItem().index = hoverIndex
  }
}

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

function collectTarget(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class Slide extends Component {
  render() {
    const {slide, setSlideText, startEditingSlide, stopEditingSlide,
      deleteSlide,
      connectDragSource, connectDropTarget, isDragging} = this.props
    const opacity = isDragging ? 0.5 : 1

    return connectDropTarget(connectDragSource(slide.get('editing') ?
      <div style={style.div}>
        <button className={style.button} onClick={stopEditingSlide}>{'CLOSE'}</button>
        <button className={style.button} onClick={deleteSlide}>{'DELETE'}</button>
        <WYSIWYG className={style.wysiwyg} handleEditorChange={setSlideText} text={slide.get('text')}></WYSIWYG>
      </div> :
      <div onClick={startEditingSlide} className={style.div} dangerouslySetInnerHTML={{__html:slide.get('text')}}>
      </div>
    ))
  }
}

export default DropTarget(ItemTypes.SLIDE, slideTarget, collectTarget)(
  DragSource(ItemTypes.SLIDE, slideSource, collectSource)(Slide));
