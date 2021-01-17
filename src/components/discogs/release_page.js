import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRelease } from "../../actions/releaseActions";
import ReleasePageItem from "./release_page_item";

class ReleasePage extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false };
  }

  componentWillMount() {
    this.props.fetchRelease(this.props.match.params.id);
  }

  render() {
    const { release } = this.props.release;

    return (
      <div>
        <ReleasePageItem release={release} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchRelease }, dispatch);
}

function mapStateToProps(state) {
  return { release: state.release };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReleasePage);
