import React from 'react'
import Meetings from '../containers/MeetingsContainer'

require('./App.scss')

export default () => {
  return (
    <article>
      <h1>Meetior - hantera dina möten och få direkt återkoppling.</h1>
      <input/>
      <button>Skapa möte</button>
      <Meetings/>
    </article>
  )
}


