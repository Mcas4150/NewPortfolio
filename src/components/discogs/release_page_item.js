import React, { Component } from "react";
import { connect } from "react-redux";
import Youtube from "react-youtube";
import _ from "lodash";

class ReleasePageItem extends Component {
  constructor() {
    super();
  }

  render() {
    const releaseData = this.props.release;
    let id = releaseData.id;
    let url = `https://www.discogs.com/release/${id}`;

 
    // let image = releaseData.thumb;
    let title = releaseData.title;

    let styles = [];
    let uri = [];
    let images = [];

    // let uri = this.props.release.videos.duration[0];
    if (_.isArray(releaseData.images) && !_.isEmpty(releaseData.images)) {
      releaseData.images.map(image => {
        images.push(image.uri);
      });
    }

    if (_.isArray(releaseData.styles) && !_.isEmpty(releaseData.styles)) {
      releaseData.styles.map(style => {
        styles.push(style);
      });
    }

    if (_.isArray(releaseData.videos) && !_.isEmpty(releaseData.videos)) {
      releaseData.videos.map(video => {
        // uri.push(video.uri);
        let uriLink = video.uri;
        let uriCode = uriLink.substr(uriLink.indexOf("=") + 1);
        uri.push(uriCode);
      });
    }

    return (
      <div>
        <a href={url} target="_blank">
          <img src={images[0]} title={title} alt={title} />

        </a>

        <Youtube videoId={uri[0]} />
      </div>
    );
  }
}

ReleasePageItem.defaultProps = {};

function mapStateToProps(state) {
  return { release: state.release };
}

export default connect(mapStateToProps)(ReleasePageItem);
