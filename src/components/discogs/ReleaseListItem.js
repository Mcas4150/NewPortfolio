import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRelease } from "../../actions/releaseActions";
import { bindActionCreators } from "redux";

class ReleaseListItem extends Component {
  render() {
    let { title } = this.props.data;
    let { size } = this.props;
    let image = this.props.data.cover_image;

    if (this.props.coversize === "small") {
      size = 150;
      image = this.props.data.thumb;
    }

    return (
      // <Link to={{ pathname: `/release/${id}` }}>
      <img height={size} width={size} src={image} title={title} alt={title} />
      // </Link>
    );
  }
}

ReleaseListItem.defaultProps = {
  size: 250,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRelease }, dispatch);
}

function mapStateToProps(state) {
  // return { coversize: state.coversize, release: state.release };
  return { coversize: state.coversize };
}

export default connect(mapStateToProps, mapDispatchToProps)(ReleaseListItem);
