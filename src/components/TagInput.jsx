import React from 'react'

import style from './TagInput.css'

export default function TagInput(props) {
  const {tags, suggestions,
    handleDeleteTag, handleAddTag} = props
  return (
    <div className={style.tagInput}>
		<input />
    </div>
  )
}
