import React from 'react'
import Meetings from '../containers/MeetingsContainer'
import Meeting from '../components/Meeting'

require('./App.scss')

export default () => {
  return (
    <article>
      <h1>Meetior - hantera dina möten och få direkt återkoppling.</h1>
      <Meetings/>
      <div>Meetingform (dev)
        <Meeting/>
      </div>
    </article>
  )
}


