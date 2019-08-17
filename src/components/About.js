import React, { Component } from "react";
import styled from "@emotion/styled";
import { Section, ContentContainer } from "./Shared";

export default class About extends Component {
  render() {
    return (
      <Section id="about">
        <ContentContainer>
          <H1>
            Hello! I'm Mike. A software engineer with an affinity for functional
            structures, sound design, and human-computer interaction.
            <br />
            <br />
            Previously a music therapist and record nerd at music distributor
            Forced Exposure. Now a fullstack audio/visual application developer
          </H1>
        </ContentContainer>
        {/* A software engineer with an affinity for functional structures, sound
        design, and human-computer interaction.
        <br />
        <br />
        Previously a music therapist and record nerd at music distributor Forced
        Exposure. Now a fullstack audio/visual application developer
        <br />
        <br /> */}
      </Section>
    );
  }
}

const AboutContainer = styled(Section)`
  max-width: 75%;
`;

const H1 = styled.h1`
  font: 7rem Helvetica;
  // font: 7.2rem/9rem Space Grotesk Regular;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
`;
