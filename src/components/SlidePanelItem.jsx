import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import {ItemTypes} from './ItemTypes'

import Slide from './Slide'
import SlideEditor from './SlideEditor'

import style from './SlidePanelItem.css'

const dragSource = {
  canDrag(props, monitor){
    return !props.slide.get('editing')
  },
  beginDrag(props){
    return {
      index: props.index
    }
  }
}

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const dragTarget = {
  hover(props, monitor, component){
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index
    if (dragIndex === hoverIndex)
      return

    const domNode = findDOMNode(component)

    const hoverBoundingRect = domNode.getBoundingClientRect()

    const clientOffset = monitor.getClientOffset()
    const hoverClientX = clientOffset.x - hoverBoundingRect.left
    const hoverClientY = clientOffset.y - hoverBoundingRect.top


    const tolerance = 20;
    if (dragIndex === hoverIndex) {
      return
    }
    if ((hoverClientX < tolerance)
      || (hoverClientX > (domNode.clientWidth - tolerance))) {
      return
    }
    if ((hoverClientY < tolerance)
      || (hoverClientY > (domNode.clientHeight - tolerance))) {
      return
    }

    props.moveSlide(dragIndex, hoverIndex)
    monitor.getItem().index = hoverIndex
  }
}

function collectTarget(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

const componentToggle = (props) => {
  const {slide, isDragging, setSlideText, stopEditingSlide, deleteSlide} = props
  const opacity = isDragging ? 0.5 : 1
  const handleDeleteSlide = (e) => {
    e.stopPropagation()
    deleteSlide()
  }

  return (
    <div>
      <div className={style.container}>
        <div className={style.content}>
          <Slide style={{opacity}} text={slide.get('text')}></Slide>
        </div>
        <div className={style.footer}>
          <div>
            <button>REDIGERA</button>
            <button onClick={handleDeleteSlide}>TA BORT</button>
          </div>
        </div>
      </div>
      <SlideEditor
        isEditing={slide.get('editing')}
        stopEditingSlide={stopEditingSlide}
        setSlideText={setSlideText}
        text={slide.get('text')}/>
    </div>
  )

}

class SlidePanelItem extends Component {
  render() {
    const {startEditingSlide,
      connectDragSource, connectDropTarget} = this.props
    return (
      connectDropTarget(connectDragSource(
        <div className={style.slidePanelItem} onClick={startEditingSlide}>
          {componentToggle(this.props)}
        </div>
        )
      ))
  }
}

export default DropTarget(ItemTypes.SLIDE, dragTarget, collectTarget)(
  DragSource(ItemTypes.SLIDE, dragSource, collectSource)(SlidePanelItem));
