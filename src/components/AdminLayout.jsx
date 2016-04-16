import React, {Component} from 'react'

import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class AdminLayout extends Component {
  render() {
    const children = this.props.children
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4">{children[0]}</div>
          <div className="col-sm-8">{children[1]}</div>
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(AdminLayout)
