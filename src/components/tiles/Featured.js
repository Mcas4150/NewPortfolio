import React, { Component } from "react";
import Discogs from "../discogs/Discogs";
import ReleasesList from "../discogs/releases_list";

export default class Featured extends Component {
  render() {
    return (
      <div>
        <ReleasesList />
      </div>
    );
  }
}
