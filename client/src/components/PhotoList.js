import React from "react";
import { connect } from "react-redux";
import { getPhotos } from "../store/actions";
import PhotoModal from "./PhotoModal";
import "../styles/photoList.css";

class PhotoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  renderImageContent(src, index) {
    return (
      <div onClick={e => this.openModal(e, index)}>
        <img
          src={src.square}
          id={src.id}
          photographer={src.photographer}
          original={src.original}
          key={src.id}
          alt="alternative text"
        />
      </div>
    );
  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  closeModal(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }
  findPrev(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1
    }));
  }
  findNext(e) {
    if (e !== undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1
    }));
  }
  render() {
    return (
      <div className="gallery-container">
        <div className="gallery-grid">
          {this.props.photos.map(this.renderImageContent)}
        </div>
        <PhotoModal
          closeModal={this.closeModal}
          findPrev={this.findPrev}
          findNext={this.findNext}
          hasPrev={this.state.currentIndex > 0}
          hasNext={this.state.currentIndex + 1 < this.props.photos.length}
          src={this.props.photos[this.state.currentIndex]}
        />
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
)(PhotoList);
