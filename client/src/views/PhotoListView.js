import React, { Component } from "react";

import { connect } from "react-redux";
import PhotoList from "../components/PhotoList";
import { getPhotos } from "../store/actions";
import "../styles/photoList.css";

export class PhotoListView extends Component {
  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    console.log(`From the view: ${this.props.photos}`);
    return (
      <div>
        <PhotoList photos={this.props.photos} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos
});

export default connect(
  mapStateToProps,
  { getPhotos }
)(PhotoListView);
