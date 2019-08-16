import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "@emotion/styled";
import circle from "./Circle.svg";
import TrackVisibility from "react-on-screen";
import Projects from "./Projects";
import Resume from "./Resume";
import About from "./About";
import Fade from "react-reveal/Fade";
import Skillset from "./Skillset";
import Blocks from "./Blocks";
import Contact from "./Contact";
import Demo from "./Demo";

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

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ball.draw();
      ball.x += ball.vx;
      ball.y += ball.vy;

      if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy = -ball.vy;
      } else {
      }
      if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx = -ball.vx;
      }
      raf = window.requestAnimationFrame(animate);
    }

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
  }

  render() {
    const { startAnimation } = this.state;
    return (
      <MainContainer>
        <LeftLinks>
          <AboutLink>
            <ScrollLink to="about">ABOUT</ScrollLink>
          </AboutLink>
          <ResumeLink>
            <ScrollLink to="resume">RESUME</ScrollLink>
          </ResumeLink>
        </LeftLinks>
        <Middle>
          <HeaderContainer>
            <Title style={{ marginLeft: "25px" }}>MIKE CASSIDY </Title>
          </HeaderContainer>
          <BodyContainer>
            <ScrollContainer>
              <About />
              <Demo />
              <Skillset />
              <canvas id="canvas" width="1800" height="830" />
              <Projects started={startAnimation} onClick={this.handleClick} />
              <Blocks />
              <Resume />
              <Contact />
            </ScrollContainer>
            <Fade>
              <NavLinkContainer />
            </Fade>
          </BodyContainer>
        </Middle>
        <RightLinks>
          <ProjectsLink>
            <ScrollLink to="projects">Projects</ScrollLink>
          </ProjectsLink>
          <ContactLink>
            <ScrollLink to="contact">Contact</ScrollLink>
          </ContactLink>
        </RightLinks>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  grid-template-areas: "about middle project" "resume middle contact";
  background-color: rgb(217, 234, 211);
  // background-color:#d3cccb
  height: 100%;
  // cursor: url(${circle});
 cursor: url('data:image/svg+xml;utf8,<svg id="svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="100"><circle cx="30" cy="30" r="25" stroke-width="2" style="stroke: black; fill: red;"/></svg>'),
 pointer;
`;

const HeaderContainer = styled.div`
  height: 20vh;
  justify-content: space-between;
  display: flex;
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ScrollContainer = styled.div`
  // width: 96vw;
  padding: 50px;

  font-size: 1.5rem;
  font-family: MonumentRegular;
`;

const Middle = styled.div`
  // position: fixed;
  // left: 4vw;
  // width: 96vw;
  margin: 0 3vw;
`;

const ScrollLink = ({ to }) => (
  <Link
    activeClass="active"
    className="monument"
    to={to}
    spy={true}
    smooth={true}
    offset={-70}
    duration={500}
  >
    Projects
  </Link>
);

const LeftLinks = styled.div`
  position: fixed;
  left: 0;
`;

const RightLinks = styled.div`
  position: fixed;
  right: 0;
  background-color: green;
`;

const SideLink = styled.div`
  width: 3vw;
  height: 50vh;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

const AboutLink = styled(SideLink)`
  background-color: blue;
  grid-area: about;
`;

const ProjectsLink = styled(SideLink)`
  background-color: green;
  grid-area: projects;
`;

const ResumeLink = styled(SideLink)`
  background-color: purple;
  grid-area: resume;
`;

const ContactLink = styled(SideLink)`
  background-color: orange;
  grid-area: contact;
`;

const NavLinkContainer = styled.div`
  // width: 20vw;
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
  transform: "perspective(600px) translate3d(10px, 0px , 50px)";
  transition: color 0.25s ease-in-out;
  :hover {
    color: black;
    transition: color 0.25s ease-in-out, transform 0.5s ease;
    transform: "perspective(600px) translate3d(-50px, 50px, 150px)";
  }
`;
