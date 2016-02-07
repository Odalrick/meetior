import React from 'react'

export default function Meetings(props) {
  console.log(props.meetings.toJS())
  let input
  return (
    <div>
      <input ref={(i)=>{input = i}}/>
      <button onClick={()=>{props.createMeeting(input.value)}}>Skapa möte 2</button>
      {props.meetings.map((item)=><div key={item.get('name')}>
        {item.get('name')}
      </div>)}
    </div>
  )
}
