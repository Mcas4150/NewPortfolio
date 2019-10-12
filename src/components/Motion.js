import React, { Component } from "react";
import styled from "@emotion/styled";
import { Controller, Scene } from "react-scrollmagic";
// import { Tween, TimelineLite } from "react-gsap";
import { TimelineLite } from "gsap";

export default class Motion extends Component {
  constructor(props) {
    super(props);
    this.myElement = null;
    this.myTween = TimelineLite({ paused: true });
  }

  componentDidMount() {
    this.myTween
      .to(document.getElementById("car"), 0.25, { x: 445 })
      .to(document.getElementById("man"), 0.125, { x: -150 })
      .to(document.getElementById("car"), 0.125, { y: "-=160" })
      .to(document.getElementById("lift"), 0.125, { y: "-=160" });
  }

  render() {
    return (
      <Body>
        <Nav className="nav">
          <button className="dark-grey-button club-demo-button" id="restart">
            restart
          </button>
        </Nav>
        <Animation className="animation">
          <Car
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/car.png"
            className="car"
            id="car"
            alt="car"
          />
          <Lift
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/lift.png"
            className="lift"
            id="lift"
            alt="lift"
          />
          <Man
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/supervisor.png"
            className="man"
            id="man"
            alt="man"
          />
        </Animation>
      </Body>
    );
  }
}

// var man = document.getElementById("man"),
//   car = document.getElementById("car"),
//   lift = document.getElementById("lift"),
//   restart = document.getElementById("restart");
// let tl = new TimelineLite();

//Challenge requirements:
//Man should begin animating 1 second before car animation ends.
//One second after man animation ends both car and lift should go up simultaneously.

// tl.to(car, 0.25, { x: 445 })
//   .to(man, 0.125, { x: -150 })
//   .to(car, 0.125, { y: "-=160" })
//   .to(lift, 0.125, { y: "-=160" });

// restart.onclick = function() {
//   tl.restart();
// };

const Body = styled.div`
  margin: 0px;
  background-color: #1d1d1d;
  font-family: Arial, sans-serif;
  height: 100%;
  overflow: hidden;
`;

const Animation = styled.div`
  margin: 20px auto;
  width: 600px;
  height: 300px;
  background-color: #2194e0;
  border-radius: 20px;
  position: relative;
  /*overflow-hidden*/
`;

const Car = styled.div`
  position: absolute;
  width: 282px;
  height: 102px;
  left: -283px;
  top: 200px;
`;

const Lift = styled.div`
  width: 307px;
  height: 195px;
  left: 154px;
  top: 297px;
  position: absolute;
`;

const Man = styled.div`
  position: absolute;
  width: 71px;
  height: 118px;
  left: 600px;
  top: 182px;
`;

const Nav = styled.div`
  text-align: center;
  margin: 20px;
`;
