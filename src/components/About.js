import styled from "@emotion/styled";
import { Section, ContentContainer } from "./Shared";

import React from "react";
import { Transition } from "react-transition-group";
import { TweenMax, TweenLite } from "gsap/all";
// import Synth2 from "./Synth2";
import Synth from "./Synth";
import NotePress from "./NotePress";

const startState = { autoAlpha: 0, y: -50 };

export const About = props => (
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
    <SynthContainer>
      <Synth />
      <NotePress />
    </SynthContainer>
  </Transition>
);

// export default class About extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       startAnimation: false
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       startAnimation: true
//     });
//   }

//   render() {
//     const { startAnimation } = this.state;
//     return (
//       <Section id="about">
//         <ContentContainer>
//           <H2 mounted={startAnimation}>
//             <Animate duration=".25" stagger="0.025">
//               Hello! I'm Mike. A software engineer with an affinity for
//               functional structures, sound design, and human-computer
//               interaction.
//             </Animate>
//             <br />
//             <br />
//             <Animate duration=".25" stagger="0.015">
//               Previously a music therapist and record nerd at music distributor
//               Forced Exposure. Now a fullstack audio/visual application
//               developer
//             </Animate>
//           </H2>
//         </ContentContainer>
//       </Section>
//     );
//   }
// }

// const H2 = styled.h1(props => ({
//   font: "7rem Helvetica",

//   position: "relative"
// }));

const SynthContainer = styled.div`
  height: 75vh;
  width: 100%;
  max-width: 100vw;
`;
