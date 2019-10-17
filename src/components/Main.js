import React, { Component } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

import { BrowserRouter, Route, NavLink } from "react-router-dom";

import { About } from "./About";

import { Work } from "./Work";

import Contact from "./Contact";
import { CV } from "./CV";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAnimation: false,
      hoverTitle: false,
      scrollX: 0,
      scrollY: 0,
      scrollPos: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.handleUnhover = this.handleUnhover.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      startAnimation: !prevState.startAnimation
    }));
  }

  handleHover() {
    this.setState({
      hoverTitle: true
    });
  }

  handleUnhover() {
    this.setState({
      hoverTitle: false
    });
  }

  render() {
    return (
      <MainContainer>
        <BrowserRouter>
          <NameContainer
            onMouseEnter={() => {
              this.handleHover();
            }}
            onMouseExit={() => {
              this.handleUnhover();
            }}
          >
            <Name3>MIKE</Name3>
            <Name2>CASSIDY</Name2>
            <Name>MIKE</Name>
            <Name2>CASSIDY</Name2>
            <Name3>MIKE</Name3>
            <Name2>CASSIDY</Name2>
            <Name>MIKE</Name>
            <Name2>CASSIDY</Name2>
            <Name3>MIKE</Name3>
            <Name2>CASSIDY</Name2>
            <Name>MIKE</Name>
            <Name2>CASSIDY</Name2>
            <Name3>MIKE</Name3>
            <Name2>CASSIDY</Name2>
            <Name>MIKE</Name>
            <Name2>CASSIDY</Name2>
            <Name3>MIKE</Name3>
            <Name2>CASSIDY</Name2>
            <Name>MIKE</Name>
            <Name2>CASSIDY</Name2>
            <Name3>MIKE</Name3>
            <Name2>CASSIDY</Name2>
            <Name>MIKE</Name>
            <Name2>CASSIDY</Name2>
            <Name3>MIKE</Name3>
            <Name2>CASSIDY</Name2>
            <Name>MIKE</Name>
            <Name2>CASSIDY</Name2>
            <Name3>MIKE</Name3>
            <Name2>CASSIDY</Name2>
            <Name>MIKE</Name>
            <Name2>CASSIDY</Name2>
            <Name3>MIKE</Name3>
            <Name2>CASSIDY</Name2>
            <Name>MIKE</Name>
            <Name2>CASSIDY</Name2>
            <Name3>MIKE</Name3>
            <Name2>CASSIDY</Name2>
            <Name>MIKE</Name>
            <Name2>CASSIDY</Name2>
            <Name3>MIKE</Name3>
            <Name2>CASSIDY</Name2>
            <Name>MIKE</Name>
            <Name2>CASSIDY</Name2>
          </NameContainer>
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
                {({ match }) => <About show={match !== null} />}
              </Route>
              <Route path="/work" exact>
                {({ match }) => <Work show={match !== null} />}
              </Route>
              <Route path="/cv">
                {({ match }) => <CV show={match !== null} />}
              </Route>
              <Route path="/contact">
                {({ match }) => <Contact show={match !== null} />}
              </Route>
            </ScrollContainer>
          </BodyContainer>
        </BrowserRouter>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  background-color: #adcad6;
  overflow: hidden;
  outline: none;
  visibility: inherit;
  opacity: 1;
  height: 100%;
`;

const moveSlideshow = keyframes`
  100% {
    transform: translateX(${"-666.6666%"});
    :hover{
      transform: translateX(${"666.6666%"});
    }
  }
`;

const NameContainer = styled.div`
  display: flex;
  left: -10%;
  font-size: 4vw;
  width: 110vw;
  height: 5vh;
  padding: 5vh 4vw;
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`;

const Name = styled.div`
  font-size: 3vw;
  font-family: "MonumentRegular";
  display: inline-block;
  justify-content: row;
  padding: 0 0 4vh 0;
  // position: absolute;
  color: #fdc;
  -webkit-text-stroke: 1.1px black;
  text-stroke: 1.1px black;
  text-shadow: none;
  transition: color 0.25s ease-in-out;
  @media (max-width: 800px) {
    font-size: 2.75vw;
  }
  :hover {
    color: rgb(246, 109, 244);
    transition: color 0.25s ease-in-out, transform 0.5s ease;
    transform: "perspective(600px) translate3d(-50px, 50px, 150px)";
    cursor: pointer;
  }
  transform: "perspective(600px) translate3d(10px, 0px , 50px)";
  top: 0;
  left: 0;
  height: 100%;
  width: 10vw;
  transform: translate3d(0, 0, 0);
  transition-timing-function: cubic-bezier(0, 0, 1, 1);
  animation: ${moveSlideshow} 60s linear infinite;
`;

const Name2 = styled(Name)`
  color: rgb(246, 109, 244);
  z-index: 5;
  :hover {
    color: white;
    transition: color 0.25s ease-in-out, transform 0.5s ease;
    transform: "perspective(600px) translate3d(-50px, 50px, 150px)";
  }
`;

const Name3 = styled(Name)`
  z-index: 6;
`;

const HeaderContainer = styled.div`
  display: flex;

  padding: 2vh 4vw;
  width: 100vw;
  height: 10vh;
`;

const BodyContainer = styled.div`
  // margin: 100px 5vh;
  padding: 0vh 4vw;
  width: 100vw;
`;

const ScrollContainer = styled.div`
  font-size: 1.5rem;
  font-family: MonumentRegular;
`;

// const NavLinkContainer = styled.div`
//   display: flex;
//   align-items: flex-end;
//   flex-direction: column;
//   position: fixed;
//   right: 0;
//   justify-conter: center;
//   text-align: right;
//   padding: 15px;
//   z-index: 5;
// `;

const Title = styled(NavLink)`
  // position: fixed;
  // display: block;
  font-family: "PolyRegular";
  // font-family: "Oswald", sans-serif;
  font-size: 2vw;
  padding: 0 4vh;
  z-index: 8;
  text-decoration: none;
  color: black;
  -webkit-text-stroke: 1.1px black;
  text-stroke: 1.1px black;
  text-shadow: none;
  transition: color 0.25s ease-in-out;
  @media (max-width: 800px) {
    font-size: 2.75vw;
  }
  :hover {
    color: rgb(246, 109, 244);
    transition: color 0.25s ease-in-out, transform 0.5s ease;
    transform: "perspective(600px) translate3d(-50px, 50px, 150px)";
  }
  transform: "perspective(600px) translate3d(10px, 0px , 50px)";
`;

const Spacer = styled.div`
  width: 100%;
`;
