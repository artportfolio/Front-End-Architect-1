import React from "react";

class PhotoModal extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    if (!this.props.src) {
      console.log("whut");
      return null;
    }
    return (
      <div>
        <div className="modal-overlay" onClick={this.props.closeModal} />
        <div isOpen={!!this.props.src.square} className="modal">
          <div className="modal-body">
            <a href="#" className="modal-close" onClick={this.props.closeModal}>
              &times;
            </a>
            {this.props.hasPrev && (
              <a href="#" className="modal-prev" onClick={this.props.findPrev}>
                &lsaquo;
              </a>
            )}
            {this.props.hasNext && (
              <a href="#" className="modal-next" onClick={this.props.findNext}>
                &rsaquo;
              </a>
            )}
            <img src={this.props.src.square} />
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoModal;
