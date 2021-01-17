import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchRelease } from "../../actions/releaseActions";
import ReleasePageItem from "./release_page_item";
import { Link } from "react-router-dom";

class ReleasePage extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: false, currentRelease: "" };
  }

  componentWillMount() {
    this.props.fetchRelease(this.props.match.params.id);
    this.setState({ currentRelease: this.props.release });
  }

  componentWillUnmount() {
    this.setState({ currentRelease: "" });
  }

  render() {
    // const { release } = this.props.release;
    const { release } = this.state.currentRelease;
    return (
      <div>
        <Link to={{ pathname: `/discogs` }}>Back</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReleasePage);
