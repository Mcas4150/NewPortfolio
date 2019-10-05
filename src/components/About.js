import React, { Component } from "react";
import styled from "@emotion/styled";
import { Section, ContentContainer } from "./Shared";
import { Animate } from "./Animate";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAnimation: false
    };
  }

  componentDidMount() {
    this.setState({
      startAnimation: true
    });
  }

  render() {
    const { startAnimation } = this.state;
    return (
      <Section id="about">
        <ContentContainer>
          <H2 mounted={startAnimation}>
            <Animate duration=".25" stagger="0.025">
              Hello! I'm Mike. A software engineer with an affinity for
              functional structures, sound design, and human-computer
              interaction.
            </Animate>
            <br />
            <br />
            <Animate duration=".25" stagger="0.015">
              Previously a music therapist and record nerd at music distributor
              Forced Exposure. Now a fullstack audio/visual application
              developer
            </Animate>
          </H2>
        </ContentContainer>
      </Section>
    );
  }
}

const H2 = styled.h1(props => ({
  font: "7rem Helvetica",

  position: "relative"
}));
