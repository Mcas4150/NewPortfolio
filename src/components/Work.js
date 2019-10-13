import React, { Component } from "react";
import styled from "@emotion/styled";
import { Section, BigText, Row, Column } from "./Shared";

import { Transition } from "react-transition-group";
import { TweenMax, TweenLite } from "gsap/all";

const startState = { autoAlpha: 0, y: -50 };

export const Work = props => (
  <Transition
    unmountOnExit
    in={props.show}
    timeout={1000}
    onEnter={node => TweenMax.set(node, startState)}
    addEndListener={(node, done) => {
      TweenMax.to(node, 0.5, {
        autoAlpha: props.show ? 1 : 0,
        y: props.show ? 0 : 50,
        onComplete: done
      });
    }}
  >
    <Section id="contact">
      <Column>
        {/* <RecordImage src={nimbus} />
            <RecordImage src={psychic} />
            <RecordImage src={joyexpo} />
           <Animate timing="0.3">Education happens everywhere</Animate> */}
      </Column>
      <br />
      <Email>Work</Email>
    </Section>
  </Transition>
);

const Email = styled.div`
  // font-size: 7rem;
  font-size: 4vw;
  font-family: "MonumentRegular";
  color: transparent;
  -webkit-text-stroke: 1.1px black;
  text-stroke: 1.1px black;
  text-shadow: none;
  transition: color 0.25s ease-in-out;
  :hover {
    color: black;
    transition: color 0.25s ease-in-out, transform 0.5s ease;
    transform: "perspective(600px) translate3d(-50px, 50px, 150px)";
  }
`;

const RecordImage = ({ src }) => (
  <img
    alt="record"
    src={src}
    style={{
      maxHeight: "250px",
      maxWidth: "250px",
      marginTop: "15px",
      marginRight: "15px"
    }}
  />
);
