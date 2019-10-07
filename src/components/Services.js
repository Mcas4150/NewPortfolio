import React, { Component } from "react";
import styled from "@emotion/styled";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

export default class Services extends Component {
  render() {
    return (
      <Container>
        <TextContainer>
          <Skill>Web Development</Skill>
          <Skill>Audio Engineer</Skill>
          <Sticky2Styled>
            <Controller>
              <Scene triggerHook={0.85} duration={300} pin indicators>
                {progress => (
                  <Sticky>
                    <Timeline totalProgress={progress} paused>
                      <Tween
                        from={{ x: "5%", top: "20%", opacity: 0 }}
                        to={{ x: "15%", top: "10%", opacity: 1 }}
                      >
                        <Animation>
                          <Title>Education</Title>
                        </Animation>
                      </Tween>

                    </Timeline>
                  </Sticky>
                )}
              </Scene>
            </Controller>
          </Sticky2Styled>
        </TextContainer>
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
  padding: 15vh 50px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Skill = styled.div`
  font-size: 3vw;
  color: black;
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
