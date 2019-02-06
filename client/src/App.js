import React, { Component } from "react";
import { Route, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./components/Header";
import BreadCrumbs from "./components/BreadCrumbs";
import { LoggedInView } from "./views/LoggedInView";
import { LoggedOutView } from "./views/LoggedOutView";
import "./styles/styles.css";
export class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />

        <div className="wrapper">
          {this.props.loggedIn ? <LoggedInView /> : <LoggedOutView />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

const AppWithRouter = withRouter(App);

export default connect(
  mapStateToProps,
  {}
)(AppWithRouter);
