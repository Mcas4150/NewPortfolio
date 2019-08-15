import React, { Component } from "react";
import styled from "@emotion/styled";
import Canvas from "./Canvas";

export default class Skillset extends Component {
  render() {
    return (
      <CanvasContainer>
        <Canvas />
      </CanvasContainer>
    );
  }
}

const CanvasContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 50vw;
  justify-content: center;
  transition: height 1s ease-in-out;
`;
