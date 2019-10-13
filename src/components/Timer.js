import React, { Component } from "react";
import { TimelineLite } from "gsap/all";
import styled from "@emotion/styled";
import OrphanLogo from "./OrphanLogo";
import "./Timer.css";

// icons will be animated using a stagger method
const iconsArray = [
  {
    src: "https://www.greensock.com/_img/codepen/icon_robust.png",
    width: "83",
    height: "59"
  },
  {
    src: "https://www.greensock.com/_img/codepen/icon_overwrite.png",
    width: "43",
    height: "59"
  },
  {
    src: "https://www.greensock.com/_img/codepen/icon_compatible.png",
    width: "73",
    height: "59"
  },
  {
    src: "https://www.greensock.com/_img/codepen/icon_support.png",
    width: "83",
    height: "59"
  },
  {
    src: "https://www.greensock.com/_img/codepen/icon_plugin.png",
    width: "76",
    height: "59"
  }
];

class Timer extends Component {
  constructor(props) {
    super(props);

    this.logoTl = new TimelineLite({ paused: true });

    this.content = null;
    this.head = null;
    this.subhead = null;
    this.feature = null;
    this.description = null;
    this.icons = [];
  }

  // add instances to the timeline
  componentDidMount() {
    this.logoTl
      .set(this.content, { autoAlpha: 1 }) // show content div
      .from(this.head, 0.5, { left: 100, autoAlpha: 0 })
      .from(this.subhead, 0.5, { left: -100, autoAlpha: 0 }, "-=0.25") // added -0.25 seconds prior to end this.of timeline
      .from(this.feature, 0.5, { scale: 0.5, autoAlpha: 0 }, "feature") // added 0.5 seconds after end of timeline
      .from(this.description, 0.5, { left: 100, autoAlpha: 0 }, "feature+=0.25")
      .staggerFrom(this.icons, 0.2, { scale: 0, autoAlpha: 0 }, 0.1); //animate all icons with 0.1 second stagger
    this.logoTl.play();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 mt-3">
            {/* DEMO WRAPPER */}
            <DemoWrapper className="demoWrapper">
              <div className="content" ref={div => (this.content = div)}>
                <h1 ref={h1 => (this.head = h1)}>Orphan Records</h1>
                <h2 ref={h2 => (this.subhead = h2)}>2019</h2>
                <div className="info">
                  {/* <img
                    src="https://www.greensock.com/_img/codepen/feature_robust.png"
                    width="240"
                    height="151"
                    alt="pic"
                    className="feature"
                    ref={img => (this.feature = img)}
                  /> */}
                  <OrphanLogo ref={img => (this.feature = img)} />
                  <p className="description" ref={p => (this.description = p)}>
                    Animate colors, beziers, css properties, arrays, scrolls and
                    lots more. Round values, smoothly reverse() on the fly, use
                    relative values, employ virtually any easing equation, and
                    manage conflicting tweens like a pro. GSAP does all this and
                    much more with ease.
                  </p>
                </div>

                <div className="nav">
                  {iconsArray.map((icon, index) => {
                    const { src, width, height } = icon;
                    return (
                      <img
                        key={`icon-${index}`}
                        src={src}
                        width={width}
                        height={height}
                        alt="rec"
                        ref={img => (this.icons[index] = img)}
                      />

                      // <OrphanLogo ref={img => (this.icons[index] = img)} />
                    );
                  })}
                </div>
              </div>
            </DemoWrapper>

            {/* BUTTONS */}
            <div className="my-3 btn-group">
              <button
                className="btn gsap-btn"
                onClick={() => this.logoTl.play()}
              >
                Play
              </button>
              <button
                className="btn gsap-btn"
                onClick={() => this.logoTl.pause()}
              >
                Pause
              </button>
              <button
                className="btn gsap-btn"
                onClick={() => this.logoTl.reverse()}
              >
                Reverse
              </button>
              <button
                className="btn gsap-btn"
                onClick={() => this.logoTl.restart()}
              >
                Restart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const DemoWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 350px;
  -webkit-font-smoothing: antialiased;
  color: black;
  overflow: hidden;
`;

export default Timer;
