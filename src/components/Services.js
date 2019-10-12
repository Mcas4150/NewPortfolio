import React, { Component } from "react";
import styled from "@emotion/styled";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export default class Services extends Component {
  render() {
    return (
      <Container>
        <Sticky2Styled>
          <Controller>
            <Scene triggerHook={0.85} duration={400 }  indicators>
              {progress => (
                <TextContainer>
                  <Timeline totalProgress={progress} paused>
                    <Tween
                      from={{ y: 400, opacity: 0 }}
                      to={{ y: 50, opacity: 1 }}
                    >

                      
                      <Animation>
                        <Skill>Web Development</Skill>
                        {/* <Skill>Audio Engineer</Skill>
                          <Title>Education</Title> */}
                      </Animation>
                    </Tween>
                  </Timeline>
                </TextContainer>
              )}
            </Scene>
          </Controller>
        </Sticky2Styled>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f2f2f2;
`;

const TextContainer = styled.div`
  padding: 5vh 50px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Skill = styled.div`
  font-size: 3vw;
  color: black;
  position: absolute;
`;

const Title = styled.div`
  opacity: 1;
  position: absolute;
  width: 300px;
  height: 300px;
`;

const Animation = styled.div`
  width: 100vw;
  height: 100%;
  position: absolute;
`;

const Sticky = styled.div`
  height: 100vh;

  width: 50vw;
`;

const Sticky2Styled = styled.div`
  // overflow: hidden;

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
`;
