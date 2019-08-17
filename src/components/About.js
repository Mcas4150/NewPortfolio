import React, { Component } from "react";
import styled from "@emotion/styled";
import { Section } from "./Shared";

export default class About extends Component {
  render() {
    return (
      <AboutContainer id="about">
        A software engineer with an affinity for functional structures, sound
        design, and human-computer interaction.
        <br />
        <br />
        Previously a music therapist and record nerd at music distributor Forced
        Exposure. Now a fullstack audio/visual application developer
        <br />
        <br />
      </AboutContainer>
    );
  }
}

const AboutContainer = styled(Section)`
  max-width: 75%;
`;
