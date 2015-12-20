import Immutable from 'immutable'
import React from 'react'

export default () => {
    const state = Immutable.List([{name: 'test',}, {name: 'test2',}, {name: 'test3',},])
    const meetings = state.map(item=><div
      key={item.name}>{item.name}</div>, state)
    return (
      <article>
        <h1>Meetior - hantera dina möten och få direkt återkoppling.</h1>
        <input/><button>Skapa möte</button>
        {meetings}
      </article>
    )
  }


