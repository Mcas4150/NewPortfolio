import styled from "@emotion/styled";
// import { Section, ContentContainer } from "./Shared";

import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
// import Loader from "./Loader";
// import Synth from "./Synth";
// import NotePress from "./NotePress";
import Pager from "./Pager";

const startState = { autoAlpha: 0};

export const About = props => (
  <Transition
    unmountOnExit
    in={props.show}
    timeout={500}
    onEnter={node => TweenMax.set(node, startState)}
    addEndListener={(node, done) => {
      TweenMax.to(node, 0.5, {
        autoAlpha: props.show ? 1 : 0,
        // y: props.show ? 0 : 0,
        onComplete: done
      });
    }}
  >
    <SynthContainer>
      <Pager />
      {/* <Loader/> */}
      {/* <Synth /> */}
      {/* <NotePress /> */}
    </SynthContainer>
  </Transition>
);

const SynthContainer = styled.div`
  height: 75vh;
  width: 100%;
  max-width: 100vw;
`;
