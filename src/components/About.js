import React, { Component } from "react";
import styled from "@emotion/styled";
import psychic from "../imgs/psychic.png";
import nimbus from "../imgs/Nimbus.png";
import joyexpo from "../imgs/Joyexpo.jpg";

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
        <Column>
          Now listening:
          <Row>
            <RecordImage src={nimbus} />
            <RecordImage src={psychic} />
            <RecordImage src={joyexpo} />
          </Row>
        </Column>
      </AboutContainer>
    );
  }
}

const AboutContainer = styled.div`
  margin-top: 75px;
  max-width: 75%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const RecordImage = ({ src }) => (
  <img
    alt="record"
    src={src}
    style={{
      maxHeight: "250px",
      maxWidth: "250px",
      marginTop: "15px",
      marginRight: "15px"
    }}
  />
);
