import React from 'react'
import R from 'ramda'

const makeTags = R.map((tag) => <li key={tag.id} >{tag.name}</li>)

export default function (props) {
  return (
    <ul>{makeTags(props.tags)}</ul>
  )
}
