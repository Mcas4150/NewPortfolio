import React, { Component } from "react";
import styled from "@emotion/styled";
import circle from "./Circle.svg";
// import TrackVisibility from "react-on-screen";
import Projects from "./Projects";
// import Ball from "./Ball";
import Resume from "./Resume";
import About from "./About";
import ScrollLink from "./ScrollLink";
// import Fade from "react-reveal/Fade";
import Skillset from "./Skillset";
import Blocks from "./Blocks";
import Contact from "./Contact";
// import Demo from "./Demo";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAnimation: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      startAnimation: !prevState.startAnimation
    }));
  }

  render() {
    const { startAnimation } = this.state;
    return (
      <MainContainer>
        <HeaderContainer>
          <Title>MIKE CASSIDY </Title>
        </HeaderContainer>
        <BodyContainer>

          {/* give position to scroll container */}
          <ScrollContainer>
            <About />
            {/* <Demo /> */}
            <Skillset />
            {/* <Ball /> */}
            <Projects started={startAnimation} onClick={this.handleClick} />
            <Blocks />
            <Resume />
            <Contact />
          </ScrollContainer>

          <NavLinkContainer>
            <ScrollLink to="about" />
            <ScrollLink to="skillset" />
            <ScrollLink to="projects" />
            <ScrollLink to="resume" />
            <ScrollLink to="contact" />
          </NavLinkContainer>
        </BodyContainer>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  background-color: rgb(217, 234, 211);
  height: 100%;
  // cursor: url(${circle});
 cursor: url('data:image/svg+xml;utf8,<svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="75" height="75"><circle cx="30" cy="30" r="25" stroke-width="2" style="stroke: black; fill: navy;"/></svg>'),
 pointer;
`;

const HeaderContainer = styled.div`
  height: 10vh;
  justify-content: space-between;
  display: flex;
  padding: 25px;
`;

const BodyContainer = styled.div`
  // display: flex;
  // justify-content: space-between;
  display: grid;
  grid-template-columns: "8fr 1fr;
`;

const ScrollContainer = styled.div`
  font-size: 1.5rem;
  font-family: MonumentRegular;
`;

const NavLinkContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  position: fixed;
  right: 0;
  justify-conter: center;
  text-align: right;
  padding: 15px;
`;

const Title = styled.div`
  position: fixed;
  font-family: "MonumentRegular";
  font-size: 5rem;
  color: transparent;
  -webkit-text-stroke: 1.1px black;
  text-stroke: 1.1px black;
  text-shadow: none;
  transform: "perspective(600px) translate3d(10px, 0px , 50px)";
  transition: color 0.25s ease-in-out;
  :hover {
    color: black;
    transition: color 0.25s ease-in-out, transform 0.5s ease;
    transform: "perspective(600px) translate3d(-50px, 50px, 150px)";
  }
`;

// TOOODOOOO  Map Letters to svg

// var rows = [];
// for (var i = 0; i < max; i++) {
//   // note: we add a key prop here to allow react to uniquely identify each
//   // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
//   rows.push(
//     <span key={i} box={boxes[Math.round(Math.random())]}>
//       {" "}
//       {boxes[Math.round(Math.random())]}{" "}
//     </span>
//   );
//   // rows.push(<span key={i} box={boxes[Math.round(Math.random())]}>  {boxes[Math.round(Math.random())]} </span>);
// }
