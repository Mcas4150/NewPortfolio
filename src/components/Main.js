import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "@emotion/styled";
import TrackVisibility from "react-on-screen";
import Projects from "./Projects";
import Resume from "./Resume";
import Section from "./Section";
import psychic from "../imgs/psychic.png";
import nimbus from "../imgs/Nimbus.png";
import Fade from "react-reveal/Fade";
import Skillset from "./Skillset";
import { throwStatement } from "@babel/types";

var boxes = ["╱", "╲"];
var rows = [];
var max = 249;
function writeNext() {
  // document.getElementById("marbles").innerHTML +=
  //   boxes[Math.round(Math.random())];
  // for (var i = 0; i < max; i++) {
  //   // note: we add a key prop here to allow react to uniquely identify each
  //   // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
  //   rows.push(
  //     <span key={i} box={boxes[Math.round(Math.random())]}>
  //       {boxes[Math.round(Math.random())]}{" "}
  //     </span>
  //   );
  //   // rows.push(<span key={i} box={boxes[Math.round(Math.random())]}>  {boxes[Math.round(Math.random())]} </span>);
  // }
}
var count = 0;
function run() {
  writeNext();
  if (count++ < max) {
    setTimeout(run, 5);
  }
}

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

  componentDidMount() {
    run();

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var raf;
    var running = false;

    var ball = {
      x: 500,
      y: 200,
      vx: 16,
      vy: 4,
      radius: 200,
      color: "gold",
      draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    };

    //function clear() {
    //  ctx.fillStyle = 'rgba(255,255,255,0.3)';
    //  ctx.fillRect(0,0,canvas.width,canvas.height);
    //}

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ball.draw();
      ball.x += ball.vx;
      ball.y += ball.vy;

      if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
        play();
      } else {
        stop();
      }
      if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
        play();
      }
      raf = window.requestAnimationFrame(animate);
    }

    //canvas.addEventListener('mousemove', function(e){
    //if (!running) {
    //clear();
    //ball.x = e.clientX;
    //ball.y = e.clientY;
    //ball.draw();
    //}
    //};//);

    canvas.addEventListener("mouseover", function() {
      if (!running) {
        window.requestAnimationFrame(animate);
        running = true;
      }
    });

    canvas.addEventListener("mouseout", function() {
      window.cancelAnimationFrame(raf);
      running = false;
    });

    //WEB AUDIO PART

    var context = new AudioContext();

    var oscillator = context.createOscillator();
    oscillator.type = "sine";
    oscillator.start(0);

    var gain = context.createGain();
    var mixGain = context.createGain();
    gain.gain.value = 0;

    function getSample(url, cb) {
      var request = new XMLHttpRequest();
      request.open("GET", url);
      request.responseType = "arraybuffer";
      request.onload = function() {
        context.decodeAudioData(request.response, cb);
      };
      request.send();
    }

    getSample(
      "https://dl.dropboxusercontent.com/u/30075450/Greek%207%20Echo%20Hall.wav",
      function(impulse) {
        var convolver = context.createConvolver();
        var buffer = context.createBufferSource();
        convolver.buffer = impulse;

        // Connections
        oscillator.connect(gain);
        gain.connect(convolver);
        convolver.connect(mixGain);
        gain.connect(mixGain);
        mixGain.connect(context.destination);
      }
    );

    function play() {
      oscillator.frequency.value = Math.random() * (1000 - 100) + 100;
      gain.gain.value = 0.8;
    }

    function stop() {
      gain.gain.value = 0;
    }

    ball.draw();
  }

  render() {
    const { startAnimation } = this.state;
    return (
      <MainContainer>
        <HeaderContainer>
          <Title style={{ marginLeft: "25px" }}>MIKE CASSIDY </Title>
        </HeaderContainer>
        <BodyContainer>
          <ScrollContainer>
            <BioContainer>
              <div id="about" style={{ marginTop: "75px" }}>
                A software engineer with an affinity for functional structures,
                sound design, and human-computer interaction.
                <br />
                <br />
                Previously a music therapist and a record nerd at music
                distributor Forced Exposure. now a fullstack audio/visual
                application developer
                <br />
                <br />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  now listening:
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      alt="record"
                      src={nimbus}
                      style={{
                        maxHeight: "250px",
                        maxWidth: "250px",
                        marginTop: "15px",
                        marginRight: "15px"
                      }}
                    />
                    <img
                      alt="record"
                      src={psychic}
                      style={{
                        maxHeight: "250px",
                        maxWidth: "250px",
                        marginTop: "15px",
                        marginRight: "15px"
                      }}
                    />{" "}
                    <img
                      alt="record"
                      src="https://img.discogs.com/RgWjSJxC1PpWqyV7NebG6e-Wj7Q=/fit-in/600x597/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-184251-1455309048-1365.jpeg.jpg"
                      style={{
                        maxHeight: "250px",
                        maxWidth: "250px",
                        marginTop: "15px",
                        marginRight: "15px"
                      }}
                    />
                  </div>
                </div>
              </div>
              <Space />
              <div id="section2">
                <Skillset id="section2" />
              </div>
              <Fade>
                <Space />{" "}
                <div
                  id="section3"
                  style={{ marginTop: "75px" }}
                  onClick={this.handleClick}
                >
                  <Projects started={startAnimation} />
                </div>
              </Fade>
              <Space />
              <div id="section4" style={{ marginTop: "75px" }}>
                <Resume />
              </div>
              <Space />
              <Section
                subtitle={" Listening, learning, and building in: Boston."}
                dark={true}
                id="section5"
              />
            </BioContainer>
          </ScrollContainer>{" "}
          <Fade>
            <NavLinkContainer>
              <Link
                activeClass="active"
                className="monument"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ marginBottom: "25px" }}
              >
                About
              </Link>
              <Link
                activeClass="active"
                className="monument"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ marginBottom: "25px" }}
              >
                Skillset
              </Link>{" "}
              <Link
                activeClass="active"
                className="monument"
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ marginBottom: "25px" }}
              >
                Projects
              </Link>
              <Link
                activeClass="active"
                className="monument link"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ marginBottom: "25px" }}
              >
                Resume
              </Link>
              <Link
                activeClass="active"
                className="monument"
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={{ marginBottom: "25px" }}
              >
                Contact
              </Link>
              <div
              // style={{
              //   width: "22.8571428571vw",
              //   height: "22.142857vw",
              //   margin: "-11.4285714286vw 0 0 -11.4285714286vw"
              // }}
              />
              <canvas id="canvas" width="400" height="223" />
              {/* <TenPlus id="marbles">{rows}</TenPlus> */}
              {/* var boxes = ["╱", "╲"];
		var max = 4000;
		function writeNext()
        {
			document.getElementById('content').innerHTML +=
			boxes[Math.round(Math.random())];
        }
		var count = 0;
		function run() {
			writeNext();
			if(count++ < max) {
				setTimeout(run,5);
			}
		}
		run();	 */}
            </NavLinkContainer>
          </Fade>
        </BodyContainer>
      </MainContainer>
    );
  }
}

const TenPlus = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  width: 250px;
  overflow-wrap: break-word;
`;

const MainContainer = styled.div`
  padding: 15px;
  background-color: rgb(217, 234, 211);
  // background-color:#d3cccb
  height: 100%;
  cursor: url("data:image/svg+xml,%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='45px' height='45px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E %3Cpath d='M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z'/%3E %3C/svg%3E"),
    pointer;
`;

const HeaderContainer = styled.div`
  position: fixed;
  padding: 20px;
  height: 20vh;
  justify-content: space-between;
  display: flex;
`;

const BioContainer = styled.div`
  padding: 50px;

  font-size: 1.5rem;
  font-family: MonumentRegular;
  max-width: 75%;
`;

const Space = styled.div`
  height: 100vh;
  width: 100vw;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ScrollContainer = styled.div`
  width: 75vw;
`;

const NavLinkContainer = styled.div`
  width: 20vw;
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
  font-size: 2.5rem;
  color: transparent;
  -webkit-text-stroke: 1.1px black;
  text-stroke: 1.1px black;
  text-shadow: none;
  transition: color 0.25s ease-in-out;
  :hover {
    color: black;
    transition: color 0.25s ease-in-out;
  }
`;

const dummyText =
  "A software engineer with an affinity for functional structures, sound design, and human-computer interaction. \n\n Previously, I've worked as a music therapist with autistic children and as inventory manager the music distributor Forced Exposure. I now specialize in fullstack application development and audio/visual programming. \n\n I spend my time listening, learning, building electronics, and writing code, currently in based in Boston.";
