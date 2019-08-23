import React, { Component } from "react";
import styled from "@emotion/styled";
import { Section, ContentContainer } from "./Shared";

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
          <H1 mounted={startAnimation}>
            Hello! I'm Mike. A software engineer with an affinity for functional
            structures, sound design, and human-computer interaction.
            <br />
            <br />
            Previously a music therapist and record nerd at music distributor
            Forced Exposure. Now a fullstack audio/visual application developer
          </H1>
        </ContentContainer>
      </Section>
    );
  }
}

const H1 = styled.h1(props => ({
  font: "7rem Helvetica",
  opacity: props.mounted ? "1" : "0",
  position: "relative",
  transform: props.mounted
    ? "matrix(1.00,0.00,0.00,1.00,0,0)"
    : "matrix(1.00,0.00,0.00,1.00,0, 75)",
  webkitTransition: "opacity 1s ease",
  transition:
    "opacity 1s ease , transform 0.5s ease-in-out 0s, color 0.25s ease-in-out"
}));
