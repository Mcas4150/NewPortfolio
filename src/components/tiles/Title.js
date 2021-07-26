import React, { Component } from "react";
import { Link } from "react-router-dom";
import Rotator from "../info/works/animations/Rotator";
import styled from "@emotion/styled";

export default class Title extends Component {
  render() {
    return (
      <TitleBox to={{ pathname: `/` }}>
        <Rotator letter="K" />
        <Rotator letter="s" />
        <Rotator letter="c" />
        <Rotator letter="d" />
      </TitleBox>
    );
  }
}

const TitleBox = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 35px;
  margin-bottom: 75px;
  font-weight: bold;
  display: flex;
  flex-direction: row;
`;
