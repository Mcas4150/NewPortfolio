import React, { Component } from "react";
import styled from "@emotion/styled";
import { Section } from "./Shared";
import Canvas from "./Canvas";

export default class Skillset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moveX: 0
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState(prevState => ({
      moveX: 800
    }));
    // if (this.state.moveX < 1000) {
    //   this.setState(prevState => ({
    //     moveX: prevState.moveX + 1
    //   }));
    //   this.handleHover();
    // }
  }

  render() {
    const { moveX } = this.state;
    return (
      <Section id="skillset">
        <ScrollBox>
          <P>
            <ScrollRow onMouseOver={this.handleHover} moveX={moveX}>
              <SkillText>ReactJs. </SkillText>
              <SkillText>Redux. </SkillText>
              <SkillText>Javascript. </SkillText>
              <SkillText>C++. </SkillText>
            </ScrollRow>
            <ScrollRow>
              <SkillText>HTML. </SkillText>
              <SkillText>CSS. </SkillText>
              <SkillText>Nodejs. </SkillText>
              <SkillText>MongoDB. </SkillText>
            </ScrollRow>
            <ScrollRow>
              <SkillText>Ruby on Rails. </SkillText>
              <SkillText>GraphQL. </SkillText>
              <SkillText>Max/Msp. </SkillText>
              <SkillText>JUCE. </SkillText>
            </ScrollRow>
          </P>
        </ScrollBox>
        {/* <Canvas /> */}
        {/* <div>ReactJs</div>
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
        <div>OpenGL</div> */}
      </Section>
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

const ScrollBox = styled.div`
  margin-top: 10rem;
  position: relative;
  width: 100vw;
`;

const P = styled.p(props => ({
  transform: `matrix(1, 0, 0, 1, -${props.moveX}, 0)`,

  top: "0",

  // position: absolute;
  whiteSpace: "nowrap"
}));

const ScrollRow = styled.span`
  display: block;
  font: 12rem/1 Monument Extended;
`;

const SkillText = styled.span`
  // transform: matrix(1, 0, 0, 1, -24112, 0);
  display: inline-block;
  white-space: nowrap;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #410807;
  transition: color 0.5s ease-in-out,  -webkit-text-fill-color: 0.5s ease-in-out;
  :hover {
    color: #410807;
    transition: color 0.5s ease-in-out,  -webkit-text-fill-color: 0.5s ease-in-out;
    -webkit-text-fill-color: #410807;
  }
`;
