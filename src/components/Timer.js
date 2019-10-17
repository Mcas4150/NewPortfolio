import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import styled from "@emotion/styled";
import OrphanLogo from "./OrphanLogo";
import { dataArray } from "./WorkData.js";
import Three from "./Three";
import "./Timer.css";
import prophec from "../imgs/prophetcplusplus.png";
import nimbus from "../imgs/Nimbus.png";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: prophec
    };
    this.logoTl = new TimelineLite({ paused: true });
    // this.hoverTl = new TimelineLite({ paused: true });

    this.content = null;
    this.head = null;
    // this.subhead = null;
    this.feature = null;
    this.description = null;
    // this.icons = [];
    this.onHover = this.onHover.bind(this);
    // this.handleMouseDown = this.handleMouseDown.bind(this);
    this.cards = [];
    // the timeline instance
    this.tl = new TimelineLite({ paused: true });
  }

  // add instances to the timeline
  componentDidMount() {
    this.logoTl
      .set(this.content, { autoAlpha: 1 }) // show content div
      .from(this.head, 0.5, { left: 100, autoAlpha: 0 });
    // .from(this.subhead, 0.5, { left: -100, autoAlpha: 0 }, "-=0.25");

    // added -0.25 seconds prior to end this.of timeline
    // .from(this.feature, 0.5, { scale: 0.5, autoAlpha: 0 }, "feature"); // added 0.5 seconds after end of timeline
    // .from(this.description, 0.5, { left: 100, autoAlpha: 0 }, "feature+=0.25")
    // .staggerFrom(this.icons, 0.2, { scale: 0, autoAlpha: 0 }, 0.1); //animate all icons with 0.1 second stagger
    this.logoTl.play();

    // this.hoverTl
    //   .from(this.feature, 0.5, { scale: 0.5, autoAlpha: 0 }, "feature") // added 0.5 seconds after end of timeline
    //   .from(
    //     this.description,
    //     0.5,
    //     { left: 100, autoAlpha: 0 },
    //     "feature+=0.25"
    //   );
    this.tl.staggerTo(this.cards, 0.5, { autoAlpha: 1, y: -20 }, 0.1);
    this.tl.play();
  }

  onHover(image) {
    this.setState({
      currentImage: image
    });
  }

  render() {
    // this.tl
    //   .kill()
    //   .clear()
    //   .pause(0);
    return (
      <WorkContainer className="container">
        {// map through the elements
        dataArray.map((element, index) => (
          <DemoWrapper
            key={element.id}
            className="demoWrapper"
            ref={div => (this.cards[index] = div)}
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
                onMouseOver={() => {
                  this.onHover(element.image);
                }}
                href={element.link}
              >
                {element.name}
              </Header>
              {/* <h2 className="year" ref={h2 => (this.subhead = h2)}></h2> */}
              {/* <OrphanLogo ref={img => (this.feature = img)} /> */}
              <Description
                style={{ color: "black" }}
                className="description"
                ref={p => (this.description = p)}
              >
                {element.description}
              </Description>{" "}
              {/* <img
                  src="https://www.greensock.com/_img/codepen/feature_robust.png"
                  width="240"
                  height="151"
                  alt="pic"
                  className="feature"
                  // ref={img => (this.feature = img)}
                /> */}
              {/* <Three picture={this.state.currentImage} /> */}
              {/* <Three
                  className="feature"
                  picture={`https://cors-anywhere.herokuapp.com/${this.state.image}`}
                /> */}
            </div>
          </DemoWrapper>
        ))}
        <Three
          className="feature"
          picture={`https://cors-anywhere.herokuapp.com/${this.state.image}`}
        />
      </WorkContainer>
    );
  }
}

const DemoWrapper = styled.div`
  // width: 100%;
  // max-width: 100vw;
  margin-top: 3vh;
  height: 20vh;
  -webkit-font-smoothing: antialiased;
  color: black;
  // overflow: hidden;
  display: flex;

  @media (min-width: 800px) {
    justify-content: center;
  }
  @media (max-width: 1000px) {
    height: 20vh;
  }
`;

const Header = styled.a`
  font-size: 2.5vw;
  padding-top: 2rem;
  text-decoration: none;
  justify-content: center;
  display: flex;
  color: yellow;
  @media (max-width: 800px) {
    font-size: 3vw;
  }
  :hover {
    color: #f93700;
  }
`;

const WorkContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

const Description = styled.div`
  position: relative;
  margin-top: 10px;
  text-align: center;
  float: left;
  margin-left: 20px;
  // width: 290px;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
  font-family: "PolyRegular";
  @media (max-width: 800px) {
    width: 35vw;
    margin-top: 5px;
  }
`;

export default Timer;
