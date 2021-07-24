import React, { Component } from "react";
import Rotator from "../works/animations/Rotator";
import styled from "@emotion/styled";

export default class Title extends Component {
  render() {
    return (
      <TitleBox>
        <Rotator letter="K" />
        <Rotator letter="s" />
        <Rotator letter="c" />
        <Rotator letter="d" />
      </TitleBox>
    );
  }
}

const TitleBox = styled.div`
  margin: 25px;
  margin-bottom: 0px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
`;
