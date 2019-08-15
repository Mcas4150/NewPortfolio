import React, { Component } from "react";

export default class CurveText extends Component {
  render() {
    const { text, position } = this.props;
    return (
      <svg
        viewBox="0 0 1000 600"
        xmlns="http://www.w3.org/2000/svg"
        xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <path id="MyPath" d={position} />
        </defs>
        <use href="#MyPath" fill="none" stroke="#59fa81" />
        <text font-family="Courier New" font-size="26">
          <textPath href="#MyPath">{text}</textPath>
        </text>
      </svg>
    );
  }
}
