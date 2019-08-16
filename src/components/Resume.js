import React, { Component } from "react";
import curvy from "./Curvy.svg";
import styled from "@emotion/styled";
import CurveText from "./CurveText";

export default class Resume extends Component {
  render() {
    return (
      <ResumeContainer id="resume">
        <CurveText text="Education" position="M 80 80 Q 440 480 200 250" />
        <div>Le Wagon</div>
        <div>CareerFoundry</div>
        <div>American University</div>
        <br />
        <div>Experience</div>
        <div>Censinet</div>
        <div>Beehive Jazz Club</div>
        <div>Forced Exposure</div>
        <div>Behavioral Health Works</div>
        <br />
        <div>Volunteer</div>
        <div>Girls Rock DC</div>
        <div>Sibley Hospital - Talked with octogenerians about Elvis</div>
        <br />
      </ResumeContainer>
    );
  }
}

const ResumeContainer = styled.div`
  margin: "75px 0";
`;
