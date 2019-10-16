import React from "react";
import styled from "@emotion/styled";
import { Section, Column } from "./Shared";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import { Line, Util, Rectangle } from "pts/dist/es5";
// import Viz from "./viz";

import { QuickStartCanvas } from "react-pts-canvas";

const startState = { autoAlpha: 0, y: 0, x: 0 };

export const Contact = props => (
  <Transition
    unmountOnExit
    in={props.show}
    timeout={500}
    onEnter={node => TweenMax.set(node, startState)}
    onExit={node => TweenMax.set(node, startState)}
    addEndListener={(node, done) => {
      TweenMax.to(node, 0.5, {
        autoAlpha: props.show ? 1 : 0,
        opacity: props.show ? 1 : 0,
        x: props.show ? 50 : 0,
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
      <Text>I'm all Ears!!</Text>
      <QuickStartCanvas
        style={{ height: "50vhpx", width: "50vw" }}
        onAnimate={(space, form, time) => {
          let subs = space.innerBound.map(p =>
            Line.subpoints([p, space.pointer], 30)
          );
          let rects = Util.zip(subs).map((r, i) =>
            Rectangle.corners(r).rotate2D((i * Math.PI) / 60, space.pointer)
          );
          form.strokeOnly("#FDC", 2).polygons(rects);
        }}
      />
      <Email>me@mikecassidy.info</Email>
    </Section>
  </Transition>
);

const Text = styled.div`
  font-size: 4vw;
  font-family: "MonumentRegular";
`;

const Email = styled.a`
  // font-size: 7rem;
  text-decoration: none;
  cursor: pointer;
  font-size: 3vw;
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
