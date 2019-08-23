import React, { Component } from "react";
import styled from "@emotion/styled";
import { TimelineMax, TweenMax, Linear } from "gsap";
import "./Album.css";

export default class Album extends Component {
  componentDidMount() {
    TweenMax.set(AlbumContainer, {
      css: {
        perspective: "800px"
      }
    });
    TweenMax.set(Box, {
      css: {
        transformStyle: "preserve-3d"
      }
    });
    TweenMax.set(Square, {
      css: {
        transformOrigin: "50% 50% -50px",
        transformPerspective: "800px"
      }
    });

    var tl = new TimelineMax({
      paused: true,
      repeat: -1 //,
      //yoyo: true
    });

    // side 1
    tl.fromTo(
      Front,
      5,
      {
        immediateRender: false,
        rotationX: "0deg",
        rotationY: "90deg",
        rotationZ: "0deg"
      },
      {
        rotationX: "0deg",
        rotationY: "450deg",
        rotationZ: "0deg",
        ease: Linear.easeNone
      },
      "cube"
    );

    // side 2
    tl.fromTo(
      Back,
      5,
      {
        immediateRender: false,
        rotationX: "0deg",
        rotationY: "270deg",
        rotationZ: "0deg"
      },
      {
        rotationX: "0deg",
        rotationY: "630deg",
        rotationZ: "0deg",
        ease: Linear.easeNone
      },
      "cube"
    );

    // side 3
    tl.fromTo(
      Right,
      5,
      {
        immediateRender: false,
        rotationX: "90deg",
        rotationY: "0deg",
        rotationZ: "0deg"
      },
      {
        rotationX: "90deg",
        rotationY: "360deg",
        rotationZ: "0deg",
        ease: Linear.easeNone
      },
      "cube"
    );

    // side 4
    tl.fromTo(
      Left,
      5,
      {
        immediateRender: false,
        rotationX: "-90deg",
        rotationY: "0deg",
        rotationZ: "0deg"
      },
      {
        rotationX: "-90deg",
        rotationY: "360deg",
        rotationZ: "0deg",
        ease: Linear.easeNone
      },
      "cube"
    );

    // side 5
    tl.fromTo(
      Top,
      5,
      {
        immediateRender: false,
        rotationX: "0deg",
        rotationY: "0deg",
        rotationZ: "0deg"
      },
      {
        rotationX: "0deg",
        rotationY: "360deg",
        rotationZ: "0deg",
        ease: Linear.easeNone
      },
      "cube"
    );

    // side 6
    tl.fromTo(
      Bottom,
      5,
      {
        immediateRender: false,
        rotationX: "0deg",
        rotationY: "180deg",
        rotationZ: "0deg"
      },
      {
        rotationX: "0deg",
        rotationY: "540deg",
        rotationZ: "0deg",
        ease: Linear.easeNone
      },
      "cube"
    );

    tl.progress(1).progress(0);
    tl.play(0);
  }

  render() {
    return (
      <AlbumContainer id="box">
        <Box className="box">
          <Front className="side1 front">1</Front>
          <Back className="side2 back">2</Back>
          <Right className="side3 right">3 </Right>
          <Left className="side4 left">4</Left>
          <Top className="side5 top">5</Top>
          <Bottom className="side6 bottom">6</Bottom>
        </Box>
      </AlbumContainer>
    );
  }
}

const AlbumContainer = styled.div`
  width: 100px;
  margin: 30px;
  /*-webkit-perspective: 800px;
  -moz-perspective: 800px;
  -o-perspective: 800px;
   perspective: 800px;*/
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  margin: 30px auto;
  position: relative;
  /*-webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    transform-style: preserve-3d;*/
`;

const Square = styled.div`
  position: absolute;
  text-align: center;
  left: 0;
  top: 0;
  line-height: 100px;
  font-weight: bold;
  font-size: 40px;
  width: 100px;
  height: 100px;
  color: #111;
  /*transform-origin: 50% 50% -50px;*/
  border: 1px solid #666;
`;

const Cover = styled(Square)`
  background: hsla(240, 100%, 50%, 0.8);
`;

const Front = styled(Cover)``;

const Back = styled(Cover)``;

const Side = styled(Square)`
  background: hsla(180, 100%, 50%, 0.8);
`;

const Right = styled(Side)``;

const Left = styled(Side)``;

const Top = styled(Side)``;

const Bottom = styled(Side)``;

// .box div span {
//   display:block;
//   position:relative;
//   top:22%;
//   font-size:42px;
//   font-weight:bold;
// }

// .box .side1 {
//   background: hsla(0, 100%, 50%, 0.8);
//   /*-webkit-animation: animate1 12s infinite linear;
//   animation: animate1 12s infinite linear;*/
// }

// .box .side2 {
//   background: hsla(60, 100%, 50%, 0.8);
//   /*-webkit-animation: animate2 12s infinite linear;
//   animation: animate2 12s infinite linear;*/
// }

// .box .side3 {
//   background: hsla(120, 100%, 50%, 0.8);
//   /*-webkit-animation: animate3 12s infinite linear;
//   animation: animate3 12s infinite linear;*/
// }

// .box .side4 {
//   background: hsla(180, 100%, 50%, 0.8);
//   /*-webkit-animation: animate4 12s infinite linear;
//   animation: animate4 12s infinite linear;*/
// }

// .box .side5 {
//   background: hsla(240, 100%, 50%, 0.8);
//   /*-webkit-animation: animate5 12s infinite linear;
//   animation: animate5 12s infinite linear;*/
// }

// .box .side6 {
//   background: hsla(300, 100%, 50%, 0.8);
//   /*animation: animate6 12s infinite linear;
//   -webkit-animation: animate6 12s infinite linear;*/
// }

/* for Chrome and Chrome */
