import React, { Component } from "react";
import styled from "@emotion/styled";
import prophec from "../imgs/prophetcplusplus.png";
import orphan from "../imgs/orphan2.png";

export default class Projects extends Component {
  render() {
    const { started } = this.props;
    return (
      <ProjectsContainer>
        <ProjectCard
          started={started}
          style={{ backgroundImage: `url(${prophec})` }}
        >
          ProphetC++
        </ProjectCard>
        <ProjectCard
          started={started}
          style={{ backgroundImage: `url(${orphan})` }}
        >
          Orphan Records
        </ProjectCard>
        <ProjectCard started={started}>Audio Plugins</ProjectCard>
        <ProjectCard started={started}>SynthFolio</ProjectCard>
        <ProjectCard started={started}>La Rama</ProjectCard>
        <ProjectCard started={started}>Max/MSP</ProjectCard>
      </ProjectsContainer>
    );
  }
}

const ProjectsContainer = styled.div`
  height: 78vh;
  // width: 85vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HoverDiv = styled.div`
  opacity: 0;
  :hover {
    opacity: 1;
    transition: opacity 1s ease;
  }
`;

const ProjectCard = styled(HoverDiv)(props => ({
  display: "flex",
  justifyContent: "center",
  // opacity: "0",
  fontSize: "2rem",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  // opacity: props.hovered ? "1"
  transform: props.started
    ? "perspective(600px) translate3d(10px, 50px, 250px)"
    : "perspective(600px) translate3d(10px, 0px , 100px)",
  // transform: "perspective(600px) translate3d(10px, 0px , 100px)",

  // hover: {
  //   opacity: "1"
  //   // transform: "perspective(600px) translate3d(10px, 50px, 250px)"
  // },
  transition: "transform 1s ease"
}));
