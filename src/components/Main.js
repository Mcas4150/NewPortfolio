import React, { Component } from "react";
import styled from "@emotion/styled";
import circle from "./Circle.svg";
import Routes from "./Routes";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
// components
import { Home, Services, Contact } from "./Components";

// import TrackVisibility from "react-on-screen";
import Projects from "./Projects";
import Three from "./Three";
import Resume from "./Resume";
import About from "./About";
import ScrollLink from "./ScrollLink";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
// import Services from "./Services";
import Skillset from "./Skillset";
import Blocks from "./Blocks";
import Motion from "./Motion";
import Timer from "./Timer";
// import Contact from "./Contact";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAnimation: false,
      scrollX: 0,
      scrollY: 0,
      scrollPos: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      startAnimation: !prevState.startAnimation
    }));
  }

  render() {
    return (
      <MainContainer>
        <BrowserRouter>
          <HeaderContainer>
            <Title to="/">ME.</Title>
            <Title to="/work">WORK</Title>
            <Spacer />
            <Title to="/cv">CV</Title>
            <Title to="/contact">CONTACT</Title>
          </HeaderContainer>
          <BodyContainer>
            {/* give position to scroll container */}
            <ScrollContainer>
              <Route path="/" exact>
                {({ match }) => <Home show={match !== null} />}
              </Route>

              <Route path="/services">
                {({ match }) => <Services show={match !== null} />}
              </Route>
              <Route path="/contact">
                {({ match }) => <Contact show={match !== null} />}
              </Route>

              {/* <About /> */}

              {/* <Skillset />
            <Three />
            <Projects />
            <Blocks /> */}
              {/* <Services /> */}
              {/* <Motion /> */}
              {/* <Timer /> */}
              {/* <Resume /> */}

              {/* <Routes /> */}
              {/* <Contact /> */}
            </ScrollContainer>

            {/* <NavLinkContainer>
            <ScrollLink to="about" />
            <ScrollLink to="skillset" />
            <ScrollLink to="projects" />
            <ScrollLink to="resume" />
            <ScrollLink to="contact" />
          </NavLinkContainer> */}
          </BodyContainer>
        </BrowserRouter>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  background-color: #DBD5C9;
  overflow: hidden;
  outline: none;
  visibility: inherit;
  opacity: 1;
  height: 100%;
  // cursor: url(${circle});
//  cursor: url('data:image/svg+xml;utf8,<svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="75" height="75"><circle cx="30" cy="30" r="25" stroke-width="2" style="stroke: black; fill: navy;"/></svg>'),
//  pointer;
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  padding: 5vh 0 5vh 4vw;
  width: 100%;
`;

const BodyContainer = styled.div`

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
  z-index: 5;
`;

const Title = styled(NavLink)`
  // position: fixed;
  // display: block;
  font-family: "MonumentRegular";
  font-size: 2vw;
  padding-right: 8vh;
  z-index: 8;

  transform: "perspective(600px) translate3d(10px, 0px , 50px)";
`;

const Spacer = styled.div`
  width: 100%;
`;

const SectionWipes2Styled = styled.div`
  overflow: hidden;
  #pinContainer {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  #pinContainer .panel {
    height: 100vh;
    width: 100vw;
    position: absolute;
    text-align: center;
  }
  // .panel span {
  //   position: relative;
  //   display: block;
  //   top: 50%;
  //   font-size: 80px;
  // }

  .panel.blue {
    background-color: #3883d8;
  }

  .panel.turqoise {
    background-color: #38ced7;
  }

  .panel.green {
    background-color: #22d659;
  }

  .panel.bordeaux {
    background-color: #953543;
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
