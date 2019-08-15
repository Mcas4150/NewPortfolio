import React, { Component } from "react";
import styled from "@emotion/styled";

export default class Projects extends Component {
  render() {
    return (
      <ProjectsContainer>
        <ProjectCard>ProphetC++</ProjectCard>
        <ProjectCard>Orphan Records</ProjectCard>
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
`;
