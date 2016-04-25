import React from 'react'

import WYSIWYG from './WYSIWYG'
import style from './SlideEditor.css'

export default class SlideEditor extends Component {
  render() {
    const {handleEditorChange, text} = this.props
    return (
        <WYSIWYG handleEditorChange text></WYSIWYG>
    )
  }
}
