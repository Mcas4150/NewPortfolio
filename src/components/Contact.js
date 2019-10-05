import React, { Component } from "react";
import styled from "@emotion/styled";
import { Section, BigText, Row, Column } from "./Shared";
import psychic from "../imgs/psychic.png";
import nimbus from "../imgs/Nimbus.png";
import joyexpo from "../imgs/Joyexpo.jpg";
import { Animate } from "./Animate";
import Album from "./Album";

export default class Contact extends Component {
  render() {
    return (
      <Section id="contact">
        <Column>
          {/* <RecordImage src={nimbus} />
            <RecordImage src={psychic} />
            <RecordImage src={joyexpo} />
           <Animate timing="0.3">Education happens everywhere</Animate> */}
        </Column>
        <br />
        <Email>me@mikecassidy.info</Email>
      </Section>
    );
  }
}

const Email = styled.div`
  // font-size: 7rem;
  font-size: 4vw;
  font-family: "MonumentRegular";
  color: transparent;
  -webkit-text-stroke: 1.1px black;
  text-stroke: 1.1px black;
  text-shadow: none;
  transition: color 0.25s ease-in-out;
  :hover {
    color: black;
    transition: color 0.25s ease-in-out, transform 0.5s ease;
    transform: "perspective(600px) translate3d(-50px, 50px, 150px)";
  }
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
