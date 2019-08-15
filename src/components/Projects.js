import React, { Component } from "react";
import styled from "@emotion/styled";
import prophec from "../imgs/prophetcplusplus.png";
import orphan from "../imgs/orphan2.png";

export default class Projects extends Component {
  render() {
    return (
      <ProjectsContainer>
        <ProjectCard style={{ backgroundImage: `url(${prophec})` }}>
          ProphetC++
        </ProjectCard>
        <ProjectCard style={{ backgroundImage: `url(${orphan})` }}>
          Orphan Records
        </ProjectCard>
        <ProjectCard>Audio Plugins</ProjectCard>
        <ProjectCard>SynthFolio</ProjectCard>
        <ProjectCard>La Rama</ProjectCard>
        <ProjectCard>Max/MSP</ProjectCard>
      </ProjectsContainer>
    );
  }
}

const ProjectsContainer = styled.div`
  height: 78vh;
  width: 70vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ProjectCard = styled.div`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  background-size: cover;
  background-repeat: no-repeat;
`;
