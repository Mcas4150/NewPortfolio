import React, { Component } from "react";
import { Section } from "./Shared";
import styled from "@emotion/styled";
import { ScrollPercentage } from "react-scroll-percentage";
import { TimelineLite } from "gsap";
import { Animate, AnimateGroup } from "react-simple-animate";

export default class Resume extends Component {
  render() {
    return (
      <Section id="resume">
        <ResumeContainer>
          <Header>
            <H1>
              <ScrollText title="Education" />
              {/* <Word>
                <Letter>E</Letter>
                <Letter>d</Letter>
                <Letter>u</Letter>
                <Letter>c</Letter>
                <Letter>a</Letter>
                <Letter>t</Letter>
                <Letter>i</Letter>
                <Letter>o</Letter>
                <Letter>n</Letter>
              </Word> */}
            </H1>
          </Header>
          <Content>
            <P>
              <Entry>Le Wagon</Entry>
              <Entry>CareerFoundry</Entry>
              <Entry>American University</Entry>
              <br />
            </P>
          </Content>

          <Header>
            <H1>
              <ScrollText title="Experience" />
              {/* <NewWord>
                <Letter>E</Letter>
                <Letter>x</Letter>
                <Letter>p</Letter>
                <Letter>e</Letter>
                <Letter>r</Letter>
                <Letter>i</Letter>
                <Letter>e</Letter>
                <Letter>n</Letter>
                <Letter>c</Letter>
                <Letter>e</Letter>
              </NewWord> */}
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
              {/* <Word>
                <Letter>V</Letter>
                <Letter>o</Letter>
                <Letter>l</Letter>
                <Letter>u</Letter>
                <Letter>n</Letter>
                <Letter>t</Letter>
                <Letter>e</Letter>
                <Letter>e</Letter>
                <Letter>r</Letter>
              </Word> */}
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
          {/* <CurveText text="Education" position="M 80 80 Q 440 480 200 250" /> */}
        </ResumeContainer>
      </Section>
    );
  }
}

const ResumeContainer = styled.div`
  max-width: 166rem;
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

const NewWord = styled.div``;

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

const Letter2 = styled.span`
  // transform: matrix(1, 0, 0, 1, 0, 0);
  // // transform: matrix(1, 0, 0, 1, 0, x);
  width: 80px;
  height: 80px;
  background-color: purple;
  margin: 10px;
  display: inline-block;
  font-size: 60px;
  line-height: 80px;
  color: white;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  /* we apply a 3d transform just to improve rendering */
  -webkit-transform: translateZ(0.1px);
  -moz-transform: translateZ(0.1px);
  -o-transform: translateZ(0.1px);
  -ms-transform: translateZ(0.1px);
  transform: translateZ(0.1px);
`;

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

const Entry = styled.div`
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

const ResumeTitle2 = styled(NewWord)(props => ({
  visibility: props.percent > 0.2 ? "visible" : "hidden",
  position: "relative",
  transform:
    props.percent > 0.05
      ? "matrix(1.00,0.00,0.00,1.00,0,0)"
      : "matrix(1.00,0.00,0.00,1.00, -125, 25)",
  webkitTransition: "opacity 1s ease",
  transition:
    "opacity 1s ease , transform 0.5s ease-in-out 0s, color 0.25s ease-in-out",
  width: "200px",
  height: "75px"
}));

const ResumeTitle3 = styled(NewWord)(props => ({
  // visibility: props.percent > 0.2 ? "visible" : "hidden",
  position: "relative"
  // transform:
  //   props.percent > 0.05
  //     ? "matrix(1.00,0.00,0.00,1.00,0,0)"
  //     : "matrix(1.00,0.00,0.00,1.00, -125, 25)",
  // webkitTransition: "opacity 1s ease",
  // transition:
  //   "opacity 1s ease , transform 0.5s ease-in-out 0s, color 0.25s ease-in-out"
}));

const SpanLetter = props => {
  const { word } = props;

  return word.split("").map((letter, index) => {
    return <Letter key={index}>{letter}</Letter>;
  });
};

const SpanLetter3 = props => {
  const { word } = props;

  return word.split("").map((letter, index) => {
    return (
      <Animate
        key={letter}
        sequenceIndex={index}
        end={{ opacity: 1, transform: "translateX(10px)" }}
        start={{ opacity: 0, transform: "translateX(0)" }}
      >
        <Letter key={index}>{letter}</Letter>
      </Animate>
    );
  });
};

const SpanLetter2 = props => {
  const { word } = props;
  var tl = new TimelineLite();
  tl.staggerFrom(
    ".letter",
    0.5,
    { opacity: 1, scale: 0, rotation: -180 },
    0.3
  ).staggerTo(".letter", 0.3, { scale: 0.8 }, 0.3, 0.7);
  return word.split("").map((letter, index) => {
    return (
      <Letter2 key={index} className="letter">
        {letter}
      </Letter2>
    );
  });
};

// triggerTimeline(letters){
// var tl = new TimelineLite();

// tl.staggerFrom(letters, 0.5, {opacity:0, scale:0, rotation:-180}, 0.3)
//   .staggerTo(letters, 0.3, {scale:0.8}, 0.3, 0.7);
// };

const ScrollText3 = props => (
  <ScrollPercentage>
    {({ percentage, ref, entry }) => (
      <ResumeTitle3 ref={ref} percent={percentage.toPrecision(2)}>
        <AnimateGroup play={percentage.toPrecision(2) > 0.1 ? "true" : "false"}>
          <SpanLetter3 word={props.title} />
        </AnimateGroup>
      </ResumeTitle3>
    )}
  </ScrollPercentage>
);

const ScrollText2 = props => (
  <ScrollPercentage>
    {({ percentage, ref, entry }) => (
      <ResumeTitle2 ref={ref} percent={percentage.toPrecision(2)}>
        <SpanLetter2 word={props.title} />
      </ResumeTitle2>
    )}
  </ScrollPercentage>
);

const ScrollText = props => (
  <ScrollPercentage>
    {({ percentage, ref, entry }) => (
      <ResumeTitle ref={ref} percent={percentage.toPrecision(2)}>
        <SpanLetter word={props.title} />
      </ResumeTitle>
    )}
  </ScrollPercentage>
);
