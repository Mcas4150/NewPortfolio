import React, { Component } from "react";
import styled from "@emotion/styled";
import Prophet from "../../../imgs/Prophet.jpg";

export default class Software extends Component {
  render() {
    return (
      <div>
        <h1>Software</h1>
        <ProphetImg src={Prophet} />A vst plugin of the Sequential Circuits'
        Pro-One Monosynth, built using the C++ Juce Framework.
        <a href="https://github.com/Mcas4150/PropheCPlusPlus">Github</a>
      </div>
    );
  }
}

const ProphetImg = styled.img`
  width: 100%;
  height: auto;
`;
