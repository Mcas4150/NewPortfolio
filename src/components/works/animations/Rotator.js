import React, { Component } from "react";
import styled from "@emotion/styled";

export default class Rotator extends Component {
  render() {
    return <Letter>{this.props.letter}</Letter>;
  }
}

const Letter = styled.div`
  font-size: 1rem;
`;
