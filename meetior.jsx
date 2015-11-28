if (Meteor.isClient) {
  Meteor.startup(() =>(
    ReactDOM.render(<App/>, document.getElementById('render-target'))
  ))
}

