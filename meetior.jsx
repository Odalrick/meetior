if (Meteor.isClient) {
  Meteor.startup(() =>(
    React.render(<App/>, document.getElementById('render-target'))
  ))
}

