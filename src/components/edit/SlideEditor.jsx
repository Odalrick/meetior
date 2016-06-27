import React from 'react'
import IPropTypes from 'react-immutable-proptypes'
import I from 'immutable'

import Loading from '../navigation/Loading.jsx'
import ImageInput from '../input/ImageInput.jsx'
import WYSIWYG from '../input/WYSIWYG.jsx'

const styles = require('./Slide.less')

function SlideEditor(props) {
  const {
    draft,
    setFieldIn,
    setAttachmentIn,
    pending,
    index,
    } = props

  const slide = draft.getIn(['slides', index], I.Map())

  const onTitleChange = (event) => {
    const newTitle = event.target.value
    setFieldIn(['slides', index, 'title'], newTitle)
  }

  const onTextChange = (event) => {
    const newDescription = event.target.value
    setFieldIn(['slides', index, 'text'], newDescription)
  }

  const onImageChange = (file) => {
    setFieldIn(['slides', index, 'image'], file.preview)
    setAttachmentIn(['slides', index, 'image'], file)
  }

  const spinner = pending ? <div>Test pending</div> : <div>test not pending</div>

  return (
    <Loading waitFor={draft}>
      <section className={styles.slide}>
        <h1 className={styles.title}>
          <input value={slide.get('title')} onChange={onTitleChange} placeholder="Titel"/>
        </h1>
        <div className={styles.image}>
          <ImageInput onChange={onImageChange} value={slide.get('image')}/>
          {spinner}
        </div>
        <div className={styles.text}>
          <WYSIWYG className={styles.text} handleEditorChange={onTextChange} text={slide.get('text')}></WYSIWYG>
        </div>
      </section>
    </Loading>
  )
}

SlideEditor.propTypes = {
  draft: IPropTypes.map,
  setFieldIn: React.PropTypes.func.isRequired,
  setAttachmentIn: React.PropTypes.func.isRequired,
  pending: React.PropTypes.bool,
  index: React.PropTypes.number,
}

export default SlideEditor
