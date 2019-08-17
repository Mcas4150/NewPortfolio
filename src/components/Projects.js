import React, { Component } from "react";
import styled from "@emotion/styled";
import { Section, BigText } from "./Shared";
import prophec from "../imgs/prophetcplusplus.png";
import orphan from "../imgs/orphan2.png";

export default class Projects extends Component {
  render() {
    const { started } = this.props;

    return (
      <ProjectsContainer id="projects">
        <ProjectBox>
          <div>
            <BorderLine />
            <ProjectText>Orphan Radio</ProjectText>
            <BorderLine />
            <ProjectText>PropheC++</ProjectText>
            <BorderLine />
            <ProjectText>SynthFolio</ProjectText>
            <BorderLine />
            <ProjectText>La Rama</ProjectText>
            <BorderLine />
            <ProjectText>Max/Msp</ProjectText>
            <BorderLine />
            <ProjectText>Audio Plugins</ProjectText>
            <BorderLine />
          </div>
        </ProjectBox>
        {/* <ProjectCard
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
        <ProjectCard started={started}>Max/MSP</ProjectCard> */}
      </ProjectsContainer>
    );
  }
}

const ProjectsContainer = styled(Section)`
  // height: 78vh;
  // width: 85vw;
  // display: grid;
  // grid-template-columns: 1fr 1fr;
  // margintop: "75px";
`;

const HoverDiv = styled.div`
  opacity: 0;
  :hover {
    opacity: 1;
    transition: opacity 1s ease;
  }
`;

const BorderLine = styled.span`
  border-bottom: 1px solid rgba(65, 8, 7, 0.2);
  position: absolute;
  width: 100%;
`;

const ProjectText = styled(BigText)`
  color: transparent;
  opacity: 1;
  pointer-events: none;
  -webkit-transition: opacity 0.4s ease;
  transition: opacity 0.4s ease;
  width: 100%;
  -webkit-text-fill-color: transparent;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #410807;
:hover {
  color: #410807;
  transition: color 0.25s ease-in-out,  -webkit-text-fill-color: 0.25s ease-in-out;
  -webkit-text-fill-color: #410807;
}
`;

const ProjectBox = styled.div`
  margin: 24rem auto 0;
  position: relative;
  width: 100%;
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
