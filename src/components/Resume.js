import React, { Component } from "react";
import curvy from "./Curvy.svg";
import { Section } from "./Shared";
import styled from "@emotion/styled";
import CurveText from "./CurveText";

export default class Resume extends Component {
  render() {
    return (
      <Section id="resume">
        <ResumeContainer>
          <Header>
            <H1>
              <Word>
                <Letter>E</Letter>
                <Letter>d</Letter>
                <Letter>u</Letter>
                <Letter>c</Letter>
                <Letter>a</Letter>
                <Letter>t</Letter>
                <Letter>i</Letter>
                <Letter>o</Letter>
                <Letter>n</Letter>
              </Word>
            </H1>
          </Header>
          <Content>
            <P>
              <div>Le Wagon</div>
              <div>CareerFoundry</div>
              <div>American University</div>
              <br />
            </P>
          </Content>

          <Header>
            <H1>
              <Word>
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
              </Word>
            </H1>
          </Header>
          <Content>
            <P>
              <div>Censinet</div>
              <div>Freelance</div>
              <div>Beehive Jazz Club</div>
              <div>Forced Exposure</div>
              <div>Behavioral Health WOrks</div>
              <br />
            </P>
          </Content>

          <Header>
            <H1>
              <Word>
                <Letter>V</Letter>
                <Letter>o</Letter>
                <Letter>l</Letter>
                <Letter>u</Letter>
                <Letter>n</Letter>
                <Letter>t</Letter>
                <Letter>e</Letter>
                <Letter>e</Letter>
                <Letter>r</Letter>
              </Word>
            </H1>
          </Header>
          <Content>
            <P>
              <div>Mutek</div>
              <div>Girls Rock DC</div>
              <div>Sibley Hospital </div>

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
  max-width: 144rem;
  width: 100%;
`;

const Header = styled.header`
  transform: matrix(1, 0, 0, 1, 0, 0);
  // transform: matrix(1, 0, 0, 1, 0, x);
`;

const H1 = styled.h1`
  font: 7rem Helvetica;
  // font: 7.2rem/9rem Space Grotesk Regular;
  max-width: 55rem;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
`;

const Word = styled.span`
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
`;

const Letter = styled.span`
  transform: matrix(1, 0, 0, 1, 0, 0);
  // transform: matrix(1, 0, 0, 1, 0, x);
`;

const Content = styled.div`
  padding-left: 75.5rem;
  padding-top: 2.5rem;
  text-align: left;
`;

const P = styled.p`
  margin-bottom: 4.5rem;

  max-width: 51.5rem;

  font: 1.8rem/1.9 Helvetica;
  // font: 1.8rem/1.9 Space Grotesk Regular;
`;
