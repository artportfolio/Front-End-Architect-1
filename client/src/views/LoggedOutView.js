import React, { Component } from "react";
import { connect } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs";
import PhotoList from "../components/PhotoList";

export class LoggedOutView extends Component {
  render() {
    return (
      <div>
        <BreadCrumbs />
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
