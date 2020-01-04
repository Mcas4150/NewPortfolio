import React from "react";
// import styled from "@emotion/styled";
import { Section } from "./Shared";

import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import Projects from "./Projects";
// import OrphanLogo from "./OrphanLogo";
// import Three from "./Three";

const startState = { autoAlpha: 0, y: 0 };

export const Work = props => (
  <Transition
    unmountOnExit
    in={props.show}
    timeout={1000}
    onEnter={node => TweenMax.set(node, startState)}
    addEndListener={(node, done) => {
      TweenMax.to(node, 0.5, {
        autoAlpha: props.show ? 1 : 0,
        y: props.show ? 50 : 0,
        onComplete: done
      });
    }}
  >
    <Section id="contact">
      <Projects />
      {/* <Three /> */}
    </Section>
  </Transition>
);

// const WorkContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
// `;
