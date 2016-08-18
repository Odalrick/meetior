import React, {Component} from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import Sidebar from '../navigation/Sidebar'

class AdminLayout extends Component {
  render() {
    const children = this.props.children
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-2"><Sidebar/></div>
          <div className="col-sm-10">{children}</div>
        </div>
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(AdminLayout)
