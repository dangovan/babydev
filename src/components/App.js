/* src/components/App.js */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
//every time we make a change, webpack-dev-server will notify the running app that is needs to update: this does a full reload(???) Hot module replacement??
if (module.hot) {
  module.hot.accept();
}

class App extends Component {
  render() {
    return <h1>Hello you!</h1>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
