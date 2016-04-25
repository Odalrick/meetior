import React, {Component} from 'react'

import Slide from './Slide'
import {ItemTypes} from './ItemTypes'
import { DragSource, DropTarget } from 'react-dnd'

const slideSource = {
  canDrag(props, monitor){
	debugger;
    return !props.slide.get('editing')
  },
  beginDrag(props){
	  debugger;
    return {
      index: props.index
    }
  }
}

function collectSource(connect, monitor) {
	debugger;
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class Draggabli extends Component {
	render(){		
		const {children, id, connectDragSource} = this.props			
		return (connectDragSource(			
				<span>{'asfdwe' + id}</span>			
		))
	}	
}

DragSource(ItemTypes.SLIDE, slideSource, collectSource)(Draggabli)

export default function (props) {
  const {slides, setSlideText, moveSlide,
    startEditingSlide, stopEditingSlide, deleteSlide} = props
  return (
    <div>
      <ol>
        {
          slides
            .map((s, i) =>
				<li key={i}>
					<Draggabli id={i}/>
				</li>
            )
			
        }
      </ol>      
    </div>
  )
}
