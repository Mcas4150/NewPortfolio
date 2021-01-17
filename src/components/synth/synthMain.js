import React, { Component } from "react";
import styled from "@emotion/styled";

export default class SynthMain extends Component {
  render() {
    return <SynthContainer>Synth Test</SynthContainer>;
  }
}

const SynthContainer = styled.div`
  height: 100%;
  width: 100%;
`;
