import React from "react";
import styled from "@emotion/styled";
import { Section, Column } from "./Shared";
import Synth2  from "./Synth2";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";

const startState = { autoAlpha: 0, y: 0, x: 0 };

export const CV = props => (
  <Transition
    unmountOnExit
    in={props.show}
    timeout={500}
    onEnter={node => TweenMax.set(node, startState)}
    onExit={node => TweenMax.set(node, startState)}
    addEndListener={(node, done) => {
      TweenMax.to(node, 0.5, {
        autoAlpha: props.show ? 1 : 0,
        x: props.show ? 50 : 0,
        onComplete: done
      });
    }}
  >
    <Section id="cv">


      <Email>CV</Email>
      {/* <Synth2 /> */}
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
