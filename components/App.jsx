App = React.createClass({
  render: ()=> {
    const state = Immutable.List([{name: 'test',}, {name: 'test2',}, {name: 'test3',},])
    const meetings = state.map(item=><div
      key={item.name}>{item.name}</div>, state)
    return (
      <article>
        <h1>Meetior - hantera dina möten och få direkt återkoppling.</h1>
        {meetings}
      </article>
    )
  }
})
