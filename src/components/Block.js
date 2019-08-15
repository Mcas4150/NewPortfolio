import React, { Component } from "react";

export default class Block extends Component {
  render() {
    return (
      <svg width="200" height="200" viewBox={this.props.viewBox}>
        <circle cx="100" cy="100" r="100" fill="#529fca" />
      </svg>
    );
  }
}
