import React, { Component } from "react";
import curvy from "./Curvy.svg";
import styled from "@emotion/styled";
import CurveText from "./CurveText";

export default class Resume extends Component {
  render() {
    return (
      <ResumeContainer>
        <CurveText text="Education: American University" position="M 20 40 Q 240 240 350 400"/>
        <CurveText text="Education: American University" position="M 80 40 Q 440 480 350 400"/>
      </ResumeContainer>
    );
  }
}




const ResumeContainer = styled.div`

`;
