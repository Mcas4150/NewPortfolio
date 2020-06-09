import React, { Component } from "react";
import YouTube from "react-youtube";

export default class Discogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Artists: ["empty"],
      Styles: [],
      Genres: [],
      Videos: [],
    };
  }

  componentDidMount() {
    this.loadRelease();
  }

  loadRelease() {
    var Discogs = require("disconnect").Client;
    var db = new Discogs().database();
    db.getRelease(176126, (err, data) => {
      console.log(data);
      this.setState({
        Artists: [data.artists],
        Styles: [data.styles],
        Genres: [data.genres],
        Videos: [data.videos[0].uri.slice(32)],
      });
    });
  }

  render() {
    const { Artists, Styles, Genres, Videos } = this.state;
    return (
      <div>
        {Styles}
        <div>
          <YouTube videoId={Videos}></YouTube>
        </div>

        <div></div>
        <div></div>
      </div>
    );
  }
}
