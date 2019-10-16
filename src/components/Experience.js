import React, { Component } from "react";
import styled from "@emotion/styled";
import { TimelineLite } from "gsap/all";
import { jobsArray, educationArray, skillsArray } from "./ExperienceData";

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.jobs = [];
    this.educations = [];
    this.skills = [];
    // the timeline instance
    this.tl = new TimelineLite({ paused: true });
  }

  componentDidMount() {
    this.tl.staggerTo(this.skills, 0.5, { autoAlpha: 1, y: -20 }, 0.1);
    this.tl.staggerTo(this.jobs, 0.5, { autoAlpha: 1, y: -20 }, 0.1);
    this.tl.staggerTo(this.educations, 0.5, { autoAlpha: 1, y: -20 }, 0.1);
    this.tl.play();
  }

  render() {
    return (
      <ExperienceGrid>
        <Skillset>
          {// map through the elements
          skillsArray.map((element, index) => (
            <DemoWrapper
              key={element.id}
              className="demoWrapper"
              ref={div => (this.skills[index] = div)}
            >
              <div
                className="content"
                ref={div => (this.content = div)}
                // onHover={() => {
                //   this.onHover();
                // }}
              >
                <Header
                  ref={h1 => (this.head = h1)}
                  // onMouseOver={() => {
                  //   this.onHover(element.image);
                  // }}
                  href={element.link}
                >
                  {element.name}
                </Header>

                <div className="info">
                  <Description
                    style={{ color: "black" }}
                    className="description"
                    ref={p => (this.description = p)}
                  >
                    {element.skillsList}
                  </Description>{" "}
                </div>
              </div>
            </DemoWrapper>
          ))}
        </Skillset>
        <Jobs>
          {" "}
          {// map through the elements
          jobsArray.map((element, index) => (
            <DemoWrapper
              key={element.id}
              className="demoWrapper"
              ref={div => (this.jobs[index] = div)}
            >
              <div
                className="content"
                ref={div => (this.content = div)}
                // onHover={() => {
                //   this.onHover();
                // }}
              >
                <Header
                  ref={h1 => (this.head = h1)}
                  // onMouseOver={() => {
                  //   this.onHover(element.image);
                  // }}
                  href={element.link}
                >
                  {element.name}
                </Header>

                <div className="info">
                  <Description
                    style={{ color: "black" }}
                    className="description"
                    ref={p => (this.description = p)}
                  >
                    {element.description}
                  </Description>{" "}
                </div>
              </div>
            </DemoWrapper>
          ))}
        </Jobs>
        <Volunteer>
          Education
          {// map through the elements

          educationArray.map((element, index) => (
            <DemoWrapper
              key={element.id}
              className="demoWrapper"
              ref={div => (this.educations[index] = div)}
            >
              <div
                className="content"
                ref={div => (this.content = div)}
                // onHover={() => {
                //   this.onHover();
                // }}
              >
                <Header
                  ref={h1 => (this.head = h1)}
                  // onMouseOver={() => {
                  //   this.onHover(element.image);
                  // }}
                  href={element.link}
                >
                  {element.name}
                </Header>

                <div className="info">
                  <Description
                    style={{ color: "black" }}
                    className="description"
                    ref={p => (this.description = p)}
                  >
                    {element.description}
                  </Description>{" "}
                </div>
              </div>
            </DemoWrapper>
          ))}
        </Volunteer>
      </ExperienceGrid>
    );
  }
}

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20vw;
  grid-template-areas: "skillset jobs" "skillset volunteer";
  @media (max-width: 1000px) {
    // grid-template-areas: 1fr 1fr ;
    grid-gap: 5vw;
    // grid-template-areas: "skillset jobs" "jobs" "volunteer";
  }
`;

const Skillset = styled.div`
  grid-area: skillset;
`;

const Jobs = styled.div`
  grid-area: jobs;
`;

const Volunteer = styled.div`
  grid-area: volunteer;
`;

const DemoWrapper = styled.div`
  // width: 100%;
  // max-width: 100vw;

  height: 10vh;
  -webkit-font-smoothing: antialiased;
  color: black;
  // overflow: hidden;
  display: flex;
  // justify-content: center;
  @media (max-width: 1000px) {
    height: 13vh;
  }
`;

const Header = styled.a`
  font-size: 2vw;
  padding-top: 2rem;
  text-decoration: none;
  justify-content: center;
  display: flex;
  color: black;
  :hover {
    color: #f93700;
  }
  @media (max-width: 1000px) {
    font-size: 2.75vw;
  }
`;

const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

const Description = styled.div`
  position: relative;
  float: left;
  margin-left: 20px;
  width: 25vw;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  font-family: "Noto Sans", sans-serif;
  @media (max-width: 1000px) {
    width: 35vw;
  }
`;
