import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

(() => {
  const app = document.createElement('div');
  document.body.appendChild(app);
  ReactDOM.render(React.createElement(App), app);
})()
