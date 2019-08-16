import React, { Component } from "react";
import styled from "@emotion/styled";
import Canvas from "./Canvas";

export default class Skillset extends Component {
  render() {
    return (
      <CanvasContainer id="skillset">
        <Canvas />
        <div>ReactJs</div>
        <div>Redux</div>
        <div>Javascript</div>
        <div>HTML</div>
        <div>CSS</div>
        <div>NodeJs</div>
        <div>MongoDB</div>
        <div>GraphQL</div>
        <div>C++</div>
        <div>Ruby on Rails</div>
        <div>Angular</div>
        <div>Max/Msp</div>
        <div>JUCE</div>
        <div>OpenGL</div>
      </CanvasContainer>
    );
  }
}

const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  justify-content: center;
  transition: height 1s ease-in-out;
`;
