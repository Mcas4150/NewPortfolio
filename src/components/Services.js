import React, { Component } from "react";
import styled from "@emotion/styled";
import { Section } from "./Shared";

export default class Services extends Component {
  render() {
    return (
      // <Section id="services">
      <Container>
        <TextContainer>
          <Skill>Web Development</Skill>
          <Skill>Audio Engineer</Skill>
        </TextContainer>
      </Container>
      // </Section>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f2f2f2;
`;

const TextContainer = styled.div`
  padding: 50px;

  display: flex;
  justify-content: space-between;
`;

const Skill = styled.div`
  font-size: 3vw;
  color: black;
`;
