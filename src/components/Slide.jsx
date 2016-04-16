import React, {Component} from 'react'
import { DragSource } from 'react-dnd'

import WYSIWYG from './WYSIWYG'
import {ItemTypes} from './ItemTypes'

const slideSource = {
  beginDrag(props){
    return {
      slideId: props.slide.get('_id')
    }
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Slide extends Component{
  render() {
    const {slide, editSlideContent, connectDragSource, isDragging} = this.props

    const handleChange = (event) => {
      this.setState({value: event.target.value}) // Why do this?
    }

    return connectDragSource(
      <div>
        <WYSIWYG content={slide.get('content')}></WYSIWYG>
      </div>
    )
  }
}

export default DragSource(ItemTypes.SLIDE, slideSource, collect)(Slide);
