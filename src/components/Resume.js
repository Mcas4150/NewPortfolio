import React, { Component } from "react";
import styled from "@emotion/styled";
import { ScrollPercentage } from "react-scroll-percentage";
// import { TimelineLite } from "gsap";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import { Animate } from "./Animate";

export default class Resume extends Component {
  render() {
    return (

        <ResumeContainer>
          <Sticky2Styled>
            <Controller>
              <Scene triggerHook="onLeave" duration={800} pin indicators>
                {progress => (
                  <div className="sticky">
                    <Timeline totalProgress={progress} paused>
                      <Tween
                        from={{ x: "5%", top: "20%", opacity: 0 }}
                        to={{ x: "15%", top: "10%", opacity: 1 }}
                      >
                        <div className="animation">
                          <div className="title">Education</div>
                        </div>
                      </Tween>
                      <Timeline
                        target={
                          <div className="heading">
                            <h2>This is a cool heading</h2>
                          </div>
                        }
                      >
                        <Tween from={{ opacity: 0 }} to={{ opacity: 1 }} />
                        <Tween to={{ x: "110%" }} />
                      </Timeline>
                    </Timeline>
                  </div>
                )}
              </Scene>
            </Controller>
          </Sticky2Styled>
          <Header>
            <H1>
              <ScrollText title="Education" />
            </H1>
          </Header>
          <Content>
            <P>
              <Entry duration=".25" stagger="0.025">
                Le Wagon
              </Entry>
              <Entry duration=".25" stagger="0.025">
                CareerFoundry
              </Entry>
              <Entry duration=".25" stagger="0.025">
                American University
              </Entry>
              <br />
            </P>
          </Content>

          <Header>
            <H1>
              <ScrollText title="Experience" />
            </H1>
          </Header>
          <Content>
            <P>
              <Entry>Censinet</Entry>
              <Entry>Beehive Jazz Club</Entry>
              <Entry>Forced Exposure</Entry>
              <Entry>Behavioral Health Works</Entry>
              <br />
            </P>
          </Content>

          <Header>
            <H1>
              <ScrollText title="Volunteer" />
            </H1>
          </Header>
          <Content>
            <P>
              <Entry>Mutek</Entry>
              <Entry>Girls Rock DC</Entry>
              <Entry>Sibley Hospital </Entry>

              <br />
            </P>
          </Content>
        </ResumeContainer>

    );
  }
}

const ResumeContainer = styled.div`

  width: 100%;
`;

const Header = styled.header`
  transform: matrix(1, 0, 0, 1, 0, 0);
  // transform: matrix(1, 0, 0, 1, 0, x);
`;

const H1 = styled.div`
  font: 7rem Helvetica;
  max-width: 55rem;
`;

const Word = styled.span`
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
`;

const Letter = styled.span`
  font-size: 5rem;
  line-height: 80px;

  text-align: center;
  -webkit-font-smoothing: antialiased;
  /* we apply a 3d transform just to improve rendering */
  -webkit-transform: translateZ(0.1px);
  -moz-transform: translateZ(0.1px);
  -o-transform: translateZ(0.1px);
  -ms-transform: translateZ(0.1px);
  transform: translateZ(0.1px);
`;

// const Letter2 = styled.span`
//   // transform: matrix(1, 0, 0, 1, 0, 0);
//   // // transform: matrix(1, 0, 0, 1, 0, x);
//   width: 80px;
//   height: 80px;
//   background-color: purple;
//   margin: 10px;
//   display: inline-block;
//   font-size: 60px;
//   line-height: 80px;
//   color: white;
//   text-align: center;
//   -webkit-font-smoothing: antialiased;
//   /* we apply a 3d transform just to improve rendering */
//   -webkit-transform: translateZ(0.1px);
//   -moz-transform: translateZ(0.1px);
//   -o-transform: translateZ(0.1px);
//   -ms-transform: translateZ(0.1px);
//   transform: translateZ(0.1px);
// `;

const Content = styled.div`
  padding-left: 75.5rem;
  padding-top: 2.5rem;
  text-align: left;
`;

const P = styled.div`
  margin-bottom: 4.5rem;

  // max-width: 51.5rem;

  font: 5rem/1.9 Helvetica;
  // font: 1.8rem/1.9 Space Grotesk Regular;
`;

const Entry = styled(Animate)`
  clear: both;
`;

const ResumeTitle = styled(Word)(props => ({
  opacity: props.percent > 0.1 ? 1 : 0,
  position: "relative",
  transform:
    props.percent > 0.05
      ? "matrix(1.00,0.00,0.00,1.00,0,0)"
      : "matrix(1.00,0.00,0.00,1.00, -125, 25)",
  webkitTransition: "opacity 1s ease",
  transition:
    "opacity 1s ease , transform 0.5s ease-in-out 0s, color 0.25s ease-in-out",
  width: "100%"
}));

// const ResumeTitle2 = styled(NewWord)(props => ({
//   visibility: props.percent > 0.2 ? "visible" : "hidden",
//   position: "relative",
//   transform:
//     props.percent > 0.05
//       ? "matrix(1.00,0.00,0.00,1.00,0,0)"
//       : "matrix(1.00,0.00,0.00,1.00, -125, 25)",
//   webkitTransition: "opacity 1s ease",
//   transition:
//     "opacity 1s ease , transform 0.5s ease-in-out 0s, color 0.25s ease-in-out",
//   width: "200px",
//   height: "75px"
// }));

// const ResumeTitle3 = styled(NewWord)(props => ({
//   // visibility: props.percent > 0.2 ? "visible" : "hidden",
//   position: "relative"
//   // transform:
//   //   props.percent > 0.05
//   //     ? "matrix(1.00,0.00,0.00,1.00,0,0)"
//   //     : "matrix(1.00,0.00,0.00,1.00, -125, 25)",
//   // webkitTransition: "opacity 1s ease",
//   // transition:
//   //   "opacity 1s ease , transform 0.5s ease-in-out 0s, color 0.25s ease-in-out"
// }));

const SpanLetter = props => {
  const { word } = props;

  return word.split("").map((letter, index) => {
    return <Letter key={index}>{letter}</Letter>;
  });
};

// const SpanLetter3 = props => {
//   const { word } = props;

//   return word.split("").map((letter, index) => {
//     return (
//       <Animate
//         key={letter}
//         sequenceIndex={index}
//         end={{ opacity: 1, transform: "translateX(10px)" }}
//         start={{ opacity: 0, transform: "translateX(0)" }}
//       >
//         <Letter key={index}>{letter}</Letter>
//       </Animate>
//     );
//   });
// };

// const SpanLetter2 = props => {
//   const { word } = props;
//   var tl = new TimelineLite();
//   tl.staggerFrom(
//     ".letter",
//     0.5,
//     { opacity: 1, scale: 0, rotation: -180 },
//     0.3
//   ).staggerTo(".letter", 0.3, { scale: 0.8 }, 0.3, 0.7);
//   return word.split("").map((letter, index) => {
//     return (
//       <Letter2 key={index} className="letter">
//         {letter}
//       </Letter2>
//     );
//   });
// };

// triggerTimeline(letters){
// var tl = new TimelineLite();

// tl.staggerFrom(letters, 0.5, {opacity:0, scale:0, rotation:-180}, 0.3)
//   .staggerTo(letters, 0.3, {scale:0.8}, 0.3, 0.7);
// };

// const ScrollText3 = props => (
//   <ScrollPercentage>
//     {({ percentage, ref, entry }) => (
//       <ResumeTitle3 ref={ref} percent={percentage.toPrecision(2)}>
//         <AnimateGroup play={percentage.toPrecision(2) > 0.1 ? "true" : "false"}>
//           <SpanLetter3 word={props.title} />
//         </AnimateGroup>
//       </ResumeTitle3>
//     )}
//   </ScrollPercentage>
// );

// const ScrollText2 = props => (
//   <ScrollPercentage>
//     {({ percentage, ref, entry }) => (
//       <ResumeTitle2 ref={ref} percent={percentage.toPrecision(2)}>
//         <SpanLetter2 word={props.title} />
//       </ResumeTitle2>
//     )}
//   </ScrollPercentage>
// );

const ScrollText = props => (
  <ScrollPercentage>
    {({ percentage, ref, entry }) => (
      <ResumeTitle ref={ref} percent={percentage.toPrecision(2)}>
        <SpanLetter word={props.title} />
      </ResumeTitle>
    )}
  </ScrollPercentage>
);

const Sticky2Styled = styled.div`
  overflow: hidden;

  .sticky,
  .sticky2 {
    height: 100vh;

    width: 50vw;
    & .animation,
    .animation2 {
      width: 100vw;
      height: 100%;
      position: absolute;
      & .title {
        opacity: 1;
        position: absolute;
        width: 300px;
        height: 300px;
      }
    }
    .heading {
      position: absolute;
      height: 100%;
      width: 100vw;
      h2 {
        font-size: 40px;
        position: absolute;
        bottom: 10%;
        left: 0;
        margin: 0;
      }
    }
  }
`;
