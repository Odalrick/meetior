import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import WYSIWYG from './WYSIWYG'
import {ItemTypes} from './ItemTypes'

const slideSource = {
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
    if(dragIndex === hoverIndex)
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


class Slide extends Component{
  render() {
    const {slide, setSlideText, connectDragSource, connectDropTarget, isDragging} = this.props
    const opacity = isDragging ? 0 : 1;
    const handleChange = (event) => {
      this.setState({value: event.target.value}) // Why do this?
    }
//<WYSIWYG content={slide.get('text')}></WYSIWYG>

    return connectDropTarget(connectDragSource(
        <div style={{opacity}} dangerouslySetInnerHTML={{__html:slide.get('text')}}>
        </div>
    ))
  }
}

export default DropTarget(ItemTypes.SLIDE, slideTarget, collectTarget)(
  DragSource(ItemTypes.SLIDE, slideSource, collectSource)(Slide));
