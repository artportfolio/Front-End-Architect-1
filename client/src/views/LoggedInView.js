import React, { Component } from "react";

import { connect } from "react-redux";
import BreadCrumbs from "../components/BreadCrumbs";
import PostsList from "../components/PostsList";

export class LoggedInView extends Component {
  render() {
    return (
      <div>
        {/* <BreadCrumbs /> */}
        <PostsList />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoggedInView);
