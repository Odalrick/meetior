import React from 'react'
import IPropTypes from 'react-immutable-proptypes'

import ImageInput from '../input/ImageInput.jsx'

const styles = require('./Card.less')

function Card(props) {
  const { draft, setField, setAttachment, pending } = props
  const onTitleChange = (event) => {
    const newTitle = event.target.value
    setField('title', newTitle)
  }

  const onDescriptionChange = (event) => {
    const newDescription = event.target.value
    setField('description', newDescription)
  }

  const onIconChange = (file) => {
    setField('icon', file.preview)
    setAttachment('icon', file)
  }

  const spinner = pending ? <div>Test pending</div> : <div>test not pending</div>

  return (
    <section className={styles.card} >
      <h1 className={styles.title} >
        <input value={draft.get('title')} onChange={onTitleChange} placeholder="Titel" />
      </h1>
      <div className={styles.icon} >
        <ImageInput onChange={onIconChange} value={draft.get('icon')} />
        {spinner}
      </div>
      <div className={styles.description} >
        <textarea
          rows="5"
          value={draft.get('description')}
          onChange={onDescriptionChange}
          placeholder="beskrivning"
        />
      </div>
      {props.children}
    </section>
  )
}

Card.propTypes = {
  draft: IPropTypes.map.isRequired,
  pending: React.PropTypes.bool,
  children: React.PropTypes.node,
}

export default Card
