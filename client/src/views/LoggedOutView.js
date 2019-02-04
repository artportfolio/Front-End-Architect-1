import React, { Component } from "react";
import { connect } from "react-redux";
import PhotoList from "../components/PhotoList";

export class LoggedOutView extends Component {
  render() {
    return (
      <div>
        {/* <p>This is the Logged Out View</p> */}
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
