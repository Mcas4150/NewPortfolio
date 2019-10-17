import React from "react";
import { Section } from "./Shared";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";


import Experience from "./Experience";

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
        // y: props.show ? -50 : 0,
        onComplete: done
      });
    }}
  >
    <Section id="cv">
      <Experience />

      {/* <Points
        name="pts_sound"
        background="#ADCAD6"
        style={{ height: "40vh", width: "50vw" }}
        file="CallOfTheWild.mp3"
        credit="Music: Space Travel Cliché by MrGreenH"
        play={true}
        height="30"
      /> */}
      {/* <Synth2 /> */}
    </Section>
  </Transition>
);
