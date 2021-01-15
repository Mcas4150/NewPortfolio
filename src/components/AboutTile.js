import React, { Component } from "react";
import styled from "@emotion/styled";
import { TileInner } from "../styles/Shared";
import "./AboutTile.css";

export default class AboutTile extends Component {
  render() {
    return (
      <Intro>
        <H1>
          <IntroText className="t-green">Mike</IntroText>
          <br />
          <IntroText className="t-yellow">Cassidy</IntroText>
          <IntroText>is</IntroText>
          <IntroText className="t-green">an</IntroText>
          <br />
          <IntroText className="t-yellow">interactive</IntroText>
          <br />
          <IntroText className="t-purple">designer</IntroText>
          <IntroText className="t-green">and</IntroText>
          <br />
          <IntroText>developer.</IntroText>
        </H1>
      </Intro>
    );
  }
}

const Intro = styled(TileInner)`
  padding: 3.125rem 1.875rem;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 3.25rem;
  color: #f5f4f0;
  font-family: "Syne-Bold", sans-serif;
  line-height: 1;
`;

const IntroText = styled.span`
  position: relative;
  display: inline-block;
  // padding-right: 5px;
  :hover {
    color: #b4b17c;
  }
`;

