import React, { Component } from "react";

export default class Discogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Release: ["empty"],
    };
  }

  componentDidMount() {
    var Discogs = require("disconnect").Client;
    var db = new Discogs().database();
    db.getRelease(176126, function (err, data) {
      console.log(data);
      // this.setState({
      //   Release: data,
      // });
    });
  }

  render() {
    return <div>{this.state.Release}</div>;
  }
}
