import React from "react";
import styled from "@emotion/styled";
import { Section, Column } from "./Shared";
import Synth2 from "./Synth2";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap/all";
import { Points } from "./Points";
import { Slider } from "react-nexusui";
import "./CV.css";
import Pager from "./Pager";
import CVPaper from "../imgs/CVImage.png";

const startState = { autoAlpha: 0, y: 0, x: 0 };

function magnify(e) {
  document.getElementById("magnify").style.top = e.pageY * 1 + "px";
  document.getElementById("magnify").style.left = e.pageX * 1 + "px";
}

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
      <div id="page">
        <img
          id="magnify"
          style={{
            height: "80vh",
            width: "35vw",
            background: `${CVPaper} center center no-repeat`
          }}
          src={CVPaper}
        ></img>
      </div>
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
