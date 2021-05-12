import React, { Component } from "react";
import Rotator from "../animations/Rotator";
import styled from "@emotion/styled";

export default class Title extends Component {
  render() {
    return (
      <TitleBox>
        <Rotator letter="M" />
        <Rotator letter="i" />
        <Rotator letter="k" />
        <Rotator letter="e" />
        <Space />
        <Rotator letter="C" />
        <Rotator letter="a" />
        <Rotator letter="s" />
        <Rotator letter="s" />
        <Rotator letter="i" />
        <Rotator letter="d" />
        <Rotator letter="y" />
      </TitleBox>
    );
  }
}

const TitleBox = styled.div`
  margin: 25px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: row;
`;

const Space = styled.div`
  width: 10px;
`;
