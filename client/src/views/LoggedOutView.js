import React, { Component } from "react";
import { connect } from "react-redux";
import PhotoList from "../components/PhotoList";

export class LoggedOutView extends Component {
  render() {
    return (
      <div>
        <h1>This is the Logged Out View</h1>
        <PhotoList />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedOutView);
