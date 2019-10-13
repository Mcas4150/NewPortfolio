import React, { Component } from "react";
// import { useDelayNextChildren } from './Hooks';
import styled from "@emotion/styled";
import { Section } from "./Shared";
// import prophec from "../imgs/prophetcplusplus.png";
// import orphan from "../imgs/orphan2.png";
import { ScrollPercentage } from "react-scroll-percentage";
// import Three from "./Three";

export default class Projects extends Component {
  render() {
    return (
      <ProjectsContainer id="projects">
        <ProjectBox>
          <div>
            <BorderLine />
            <ScrollText title="Orphan Radio" />
            <BorderLine />
            <ScrollText title="PropheC++" />
            <BorderLine />
            <ScrollText title="SynthFolio" />
            <BorderLine />
            <ScrollText title="La Rama" />
            <BorderLine />
            <ScrollText title="Max/Msp" />
            <BorderLine />
            <ScrollText title="Audio Plugins" />
            <BorderLine />
          </div>
        </ProjectBox>
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

// const HoverDiv = styled.div`
//   opacity: 0;
//   :hover {
//     opacity: 1;
//     transition: opacity 1s ease;
//   }
// `;

const BorderLine = styled.span`
  border-bottom: 1px solid rgba(65, 8, 7, 0.2);
  position: absolute;
  width: 100%;
`;

const BigText = styled.span`
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #410807;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font: 12rem/1 Monument Extended;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 25rem;
  padding-top: 1rem;
  text-align: center;
  white-space: nowrap;
  z-index: 2;
  :hover {
    color: #410807;
    transition: color 0.25s ease-in-out,  -webkit-text-fill-color: 0.25s ease-in-out;
    -webkit-text-fill-color: #410807;
  }
`;

const ProjectText = styled(BigText)(props => ({
  color: "transparent",
  opacity: props.percent > 0.1 ? 1 : 0,
  position: "relative",

  transform:
    props.percent > 0.05
      ? "matrix(1.00,0.00,0.00,1.00,0,0)"
      : "matrix(1.00,0.00,0.00,1.00,0, 75)",
  webkitTransition: "opacity 1s ease",
  transition:
    "opacity 1s ease , transform 0.5s ease-in-out 0s, color 0.25s ease-in-out",
  width: "100%"
}));

const ProjectBox = styled.div`
  margin: 24rem auto 0;
  position: relative;
  width: 100%;
`;

// const sleep = milliseconds => {
//   return new Promise(resolve => setTimeout(resolve, milliseconds));
// };

const SpanLetter = props => {
  const { word} = props;

  return word.split("").map((letter, index) => {
    // setTimeout(() => {
    //   return <span key={index}>{letter}</span>;
    // }, 150);
    return <span key={index}>{letter}</span>;
  //  const render = <span key={index}>{letter}</span>;
  //  return useDelayNextChildren(render, delay);
  });
};

// const ProjectImage = styled(Three)`
//   visibility: hidden;
//   :hover {
//     visibility: visible;
//   }
// `;

// const SpanLetter = props => {
//   const { word } = props;

//   return word.split("").map((letter, index) => {
//     return <span key={index}>{letter}</span>;
//   });
// };

const ScrollText = props => (
  <ScrollPercentage>
    {({ percentage, ref, entry }) => (
      <ProjectText ref={ref} percent={percentage.toPrecision(2)}>
        <SpanLetter word={props.title} />
      </ProjectText>
    )}
  </ScrollPercentage>
);



