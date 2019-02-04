import React, { Component } from "react";

import { connect } from "react-redux";
import Header from "./components/Header";
import { LoggedInView } from "./views/LoggedInView";
import { LoggedOutView } from "./views/LoggedOutView";
import "./styles/styles.css";
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
        <Header />
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
