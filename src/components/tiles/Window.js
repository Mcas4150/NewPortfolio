import React, { Component } from "react";
import styled from "@emotion/styled";
import ReleasesList from "../discogs/releases_list";

export default class Window extends Component {
  render() {
    return (
      <Frame>
        <Title>Discogs</Title>
        <Content>
          {" "}
          <ReleasesList />
        </Content>
      </Frame>
    );
  }
}

const Frame = styled.div`
  background-color: #D8D8D8;
  margin: 25px;
  padding: 15px;
  border: 1.85px solid black;
`;

const Title = styled.div`
  background-color: #E7E7E7;
  padding: 5px;
  height: 25px;
  justify-content: center;
  // margin: 15px;
  border: 1.85px solid black;
`;

const Content = styled.div`
  background-color: #E7E7E7;
  // margin: 15px;
  margin-top: 15px;
  border: 1.85px solid black;
`;
