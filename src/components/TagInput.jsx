import React from 'react'
//import ReactTags from 'react-tag-input'
var ReactTags  = require('react-tag-input').WithOutContext;

export default function TagInput(props) {
  const {tags, suggestions,
    handleDeleteTag, handleAddTag} = props
  return (
    <div>
      <ReactTags tags={tags.map((t,i) => ({id: i, name: t})).toJS()}
                 suggestions={suggestions.map((t,i) => ({id: i, name: t})).toJS()}
                 handleAddition={(tag) => { debugger; handleAddTag(tag.name)}}
                 handleDelete={(i) => handleDeleteTag(tags.get(i))} />
    </div>
  )
}
