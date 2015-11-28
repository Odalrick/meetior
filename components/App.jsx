App = React.createClass({
  render: ()=> {
    const state = mori.toClj([{name: 'test',}, {name: 'test2',}, {name: 'test3',},])
    const meetings = mori.toJs(mori.map(item=><div
      key={mori.get(item, 'name', 'no name?')}>{mori.get(item, 'name', 'no name?')}</div>, state))
    return (
      <article>
        <h1>Meetior - hantera dina möten och få direkt återkoppling.</h1>
        {meetings}
      </article>
    )
  }
})
