import React, { Component } from "react";

import { connect } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import { LoggedInView } from "./views/LoggedInView";
import { LoggedOutView } from "./views/LoggedOutView";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/">
            <h1 className="logo">artful</h1>
          </NavLink>
        </nav>
        {this.props.loggedIn ? <LoggedInView /> : <LoggedOutView />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.loggedIn,
  photos: state.photos
});

export default connect(
  mapStateToProps,
  {}
)(App);
