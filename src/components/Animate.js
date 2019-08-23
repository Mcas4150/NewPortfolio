import React, { useEffect, useRef } from "react";

import TimelineMax from "gsap/TimelineMax";
import TweenLite from "gsap/TweenLite";

const Header = () => {
  const ref = useRef();

  useEffect(() => {
    TweenLite.to(ref.current, 1, { top: 100 });
  });

  return (
    <div ref={ref} style={{ color: "orange" }}>
      <h1>Header here</h1>
    </div>
  );
};

const SpanLetters = props => {
  const { word } = props;

  return word.split("").map((letter, index) => {
    return (
      <span key={index} className="class">
        {letter}
      </span>
    );
  });
};

const SpanWord = props => {
  const word = props.children;
  return word.split(/(\s+)/).map((letter, index) => {
    // return word.split(" ").map((letter, index) => {
    return (
      <span key={index} className="class">
        {letter}
      </span>
    );
  });
};

export const Animate = props => {
  const timeline = new TimelineMax({ paused: true });
  const ref1 = useRef();

  useEffect(() => {
    timeline

      // .add(TweenLite.to(ref1.current, 1, { left: 100 }))
      // .add(TweenLite.to(ref2.current, 1, { bottom: 200 }))
      .staggerFromTo(".class", props.duration, { opacity: 0 }, { opacity: 1 }, props.stagger)
      // .staggerFromTo(
      //   ".class",
      //   1,
      //   { transform: "matrix(1.00,0.00,0.00,1.00,0, 75)" },
      //   { transform: "matrix(1.00,0.00,0.00,1.00,0,0)" },
      //   0.3
      // )
      .play();
  });

  return (

      <div ref={ref1}>
        {/* <SpanLetters word="Education" /> */}
        <SpanWord>{props.children}</SpanWord>
      </div>

  );
};
