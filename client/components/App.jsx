import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

/**
 * @class App
 *
 * @classdesc route
 *
 */
export default class App extends Component {
  render = () => (
    <Router>
      <div>
        <Switch />
      </div>
    </Router>
  );
}

