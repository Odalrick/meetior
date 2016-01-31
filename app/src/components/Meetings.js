import React from 'react'

export default function Meetings(props) {
  console.log(props)
  return (
    <div>
      {props.meetings.map(item=><div
      key={item.name}>{item.name}</div>)}
    </div>
  )
}
