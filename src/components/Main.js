import React, { Component } from "react";
import styled from "@emotion/styled";
// import { keyframes } from "@emotion/core";
// import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "./Main.css";
// import Three from "./Three";
import Simplex from "./Simplex";
// import { About } from "./About";
// import { Work } from "./Work";
// import { Contact } from "./Contact";
// import { CV } from "./CV";
import Pager from "./Pager";
// import { Points } from "./Points";
import OrphanLogo from "./OrphanLogo";
import Ears from "./Ears";
import  AboutTile  from "./AboutTile";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAnimation: false,
      hoverTitle: false,
      scrollX: 0,
      scrollY: 0,
      scrollPos: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleUnhover = this.handleUnhover.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      startAnimation: !prevState.startAnimation,
    }));
  }

  handleHover() {
    this.setState({
      hoverTitle: true,
    });
  }

  handleUnhover() {
    this.setState({
      hoverTitle: false,
    });
  }

  render() {
    return (
      <TileContainer>
        {/* <BrowserRouter>
          <NameContainer
            onMouseEnter={() => {
              this.handleHover();
            }}
            onMouseLeave={() => {
              this.handleUnhover();
            }}
          >
            <Name>MIKE</Name>
            <Name2>CASSIDY</Name2>
          </NameContainer>
          <HeaderContainer>
            <Title className="widen" to="/">
              ME.
            </Title>
            <Title className="widen" to="/work">
              WORK
            </Title>
            <Spacer />
            <Title className="widen" to="/cv">
              CV
            </Title>
            <Title className="widen" to="/contact">
              CONTACT
            </Title>
          </HeaderContainer>

          <BodyContainer>
            <ScrollContainer>
              <Route exact path="/">
                {({ match }) => <About show={match !== null} />}
              </Route>
              <Route exact path="/work">
                {({ match }) => <Work show={match !== null} />}
              </Route>
              <Route exact path="/cv">
                {({ match }) => <CV show={match !== null} />}
              </Route>
              <Route exact path="/contact">
                {({ match }) => <Contact show={match !== null} />}
              </Route>
            </ScrollContainer>
          </BodyContainer>
        </BrowserRouter> */}
        <TitleContainer>
          <TileInner>mike</TileInner>
        </TitleContainer>
        <LeftGradient>Left</LeftGradient>
        <Spheres>
          <Pager />
        </Spheres>
        <AboutContainer>
          <AboutTile />
        </AboutContainer>
        <Featured></Featured>
        <ContactContainer>contact</ContactContainer>
        {/* Middle */}
        <SixContainer>{/* <Simplex /> */}</SixContainer>
        <SevenContainer>
          {/* <Ears /> */}
          {/* seven
          <Three /> */}
          <Simplex />
        </SevenContainer>
        <EightContainer>
          <OrphanLogo />
        </EightContainer>
        {/* <Canvas/> */}
        <Ears />
      </TileContainer>
    );
  }
}

const TileContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 1fr;
  grid-auto-rows: 8vw;
  margin: auto;
  width: 100%;
  height: 216vw;
  grid-gap: 0 0;
  -webkit-filter: saturate(1.2);
  filter: saturate(1.2);
`;

const Tile = styled.div`
  overflow: hidden;
  position: relative;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
`;

const TileInner = styled.div`
  .tile__inner {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const TitleContainer = styled(Tile)`
  grid-area: 1 / 1 / span 1 / span 1;
  background-color: #7f519d;
`;

const LeftGradient = styled(Tile)`
  grid-area: 2 / 1 / span 6 / span 1;
  background-color: #c8accd;
`;

const Spheres = styled(Tile)`
  grid-area: 1 / 2 / span 3 / span 4;
  background-color: #a2dce6;
`;

const AboutContainer = styled(Tile)`
  grid-area: 4 / 2 / span 4 / span 4;
  background-color: #b4b17c;
`;

const Featured = styled(Tile)`
  grid-area: 1 / 6 / span 6 / span 7;
  background-color: #b65b7f;
`;

const ContactContainer = styled(Tile)`
  grid-area: 7 / 6 / span 1 / span 7;
  background-color: #5b8b6c;
`;

const SixContainer = styled(Tile)`
  grid-area: 8 / 8 / span 2 / span 5;
  background-color: #f5f4f0;
`;

const SevenContainer = styled(Tile)`
  grid-area: 8 / 1 / span 4 / span 5;
  // background-color: #f4eca4;
  background-color: #e0ded1;
`;

const EightContainer = styled(Tile)`
  grid-area: 8 / 6 / span 2 / span 2;
  background-color: #1053ab;
`;

// const MainContainer = styled.div`
//   background-color: #a2dce6;
//   overflow: hidden;
//   outline: none;
//   visibility: inherit;
//   opacity: 1;
//   height: 100%;
// `;

// const moveSlideshow = keyframes`
//   100% {
//     transform: translateX(${"-666.6666%"});
//     :hover{
//       transform: translateX(${"666.6666%"});
//     }
//   }
// `;

// const NameContainer = styled.div`
//   display: flex;
//   // left: -10%;
//   font-size: 4vw;
//   width: 100vw;
//   justify-content: center;
//   height: 5vh;
//   padding: 5vh 4vw;
//   position: relative;
//   overflow: hidden;
//   // transform: translate3d(0, 0, 0);
// `;

// const Name = styled.div`
//   font-size: 3vw;
//   font-family: "MonumentRegular";
//   display: inline-block;
//   justify-content: row;
//   padding: 0 0 4vh 0;
//   // position: absolute;
//   color: #fdc;
//   -webkit-text-stroke: 1.1px black;
//   text-stroke: 1.1px black;
//   text-shadow: none;
//   transition: color 0.25s ease-in-out;
//   @media (max-width: 800px) {
//     font-size: 2.75vw;
//     -webkit-text-stroke: 0px black;
//     text-stroke: 0px black;
//   }
//   :hover {
//     color: #1c3e93;
//     transition: color 0.25s ease-in-out, transform 0.5s ease;
//     transform: "perspective(600px) translate3d(-50px, 50px, 150px)";
//     cursor: pointer;
//   }
//   // transform: "perspective(600px) translate3d(10px, 0px , 50px)";
//   top: 0;
//   left: 0;
//   height: 100%;
//   margin: .75vw;
//   // width: 10vw;
//   // transform: translate3d(0, 0, 0);
//   // transition-timing-function: cubic-bezier(0, 0, 1, 1);
//   // animation: ${moveSlideshow} 60s linear infinite;
// `;

// const Name2 = styled(Name)`
//   color: #1c3e93;
//   z-index: 5;
//   :hover {
//     color: white;
//     transition: color 0.25s ease-in-out, transform 0.5s ease;
//     transform: "perspective(600px) translate3d(-50px, 50px, 150px)";
//   }
// `;

// const HeaderContainer = styled.div`
//   display: flex;

//   padding: 3vh 4vw;
//   width: 100vw;
//   height: 2vh;
//   @media (max-width: 1000px) {
//     padding: 1vh 4vw;
//     height: 5vh;
//   }
// `;

// const BodyContainer = styled.div`
//   // margin: 100px 5vh;
//   padding: 0vh 4vw;
//   width: 100vw;
//   height: 80vh;
// `;

// const ScrollContainer = styled.div`
//   font-size: 1.5rem;
//   font-family: MonumentRegular;
// `;

// const Title = styled(NavLink)`
//   font-family: "PolyRegular";

//   font-size: 2vw;
//   padding: 0 4vh;
//   z-index: 8;
//   text-decoration: none;
//   color: black;
//   -webkit-text-stroke: 1.1px black;
//   text-stroke: 1.1px black;
//   text-shadow: none;

//   @media (max-width: 800px) {
//     font-size: 2.75vw;
//   }

//   transform: "perspective(600px) translate3d(10px, 0px , 50px)";
// `;

// const Spacer = styled.div`
//   width: 100%;
// `;
