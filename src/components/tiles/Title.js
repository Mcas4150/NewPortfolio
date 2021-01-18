import React, { Component } from "react";
import Rotator from "../animations/Rotator";
import styled from "@emotion/styled";

export default class Title extends Component {
  render() {
    return (
      <TitleBox>
        <Rotator letter="M" />
        <Rotator letter="I" />
        <Rotator letter="K" />
        <Rotator letter="E" />
        <Space />
        <Rotator letter="C" />
        <Rotator letter="A" />
        <Rotator letter="S" />
        <Rotator letter="S" />
        <Rotator letter="I" />
        <Rotator letter="D" />
        <Rotator letter="Y" />
      </TitleBox>
    );
  }
}

const TitleBox = styled.div`
  margin: 25px;
  display: flex;
  flex-direction: row;
`;

const Space = styled.div`
  width: 25px;
`;
