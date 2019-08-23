import React, { Component } from "react";
import styled from "@emotion/styled";
import { Section, BigText, Row, Column } from "./Shared";
import psychic from "../imgs/psychic.png";
import nimbus from "../imgs/Nimbus.png";
import joyexpo from "../imgs/Joyexpo.jpg";
import { Animate } from "./Animate";

export default class Contact extends Component {
  render() {
    return (
      <Section id="contact">
        <Column>
          Now listening:
          <Row>
            {/* <RecordImage src={nimbus} />
            <RecordImage src={psychic} />
            <RecordImage src={joyexpo} /> */}
            <Animate timing="0.3">Education happens everywhere</Animate>
          </Row>
        </Column>
        <br />
        <Email>me@mikecassidy.info</Email>
      </Section>
    );
  }
}

const Email = styled(BigText)`
  font-size: 7rem;
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
