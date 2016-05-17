import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'

import {ItemTypes} from './ItemTypes'

import style from './PanelItem.css'

const dragSource = {
  canDrag(props, monitor){
    return props.canMove(props.index)
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

    props.moveItem(dragIndex, hoverIndex)
    monitor.getItem().index = hoverIndex
  }
}

function collectTarget(connect) {
  return {
    connectDropTarget: connect.dropTarget()
  }
}

class PanelItem extends Component {
  render() {
    const {connectDragSource, connectDropTarget, isDragging} = this.props
    const opacity = isDragging ? 0.5 : 1
    return (
      connectDropTarget(connectDragSource(
        <div style={{opacity}} className={style.panelItem}>{this.props.children}</div>
      ))
    )
  }
}

export default DropTarget(ItemTypes.SLIDE, dragTarget, collectTarget)(
  DragSource(ItemTypes.SLIDE, dragSource, collectSource)(PanelItem));
