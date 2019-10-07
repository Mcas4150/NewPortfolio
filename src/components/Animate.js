import React, { useEffect, useRef } from "react";

import TimelineMax from "gsap/TimelineMax";

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
  const timeline = new TimelineMax({ paused: true, smoothChildTiming: true });
  const ref1 = useRef();

  useEffect(() => {
    timeline

      // .add(TweenLite.to(ref1.current, 1, { left: 100 }))
      // .add(TweenLite.to(ref2.current, 1, { bottom: 200 }))

      .staggerFrom(".class", props.duration, {
        autoAlpha: 0,
        transform: "matrix(1.00,0.00,0.00,1.00,0,75)"
      })
      .staggerTo(
        ".class",
        props.duration,
        {
          autoAlpha: 1,
          transform: "matrix(1.00,0.00,0.00,1.00,0,0)"
        },
        props.stagger
      )

      .play();
  });

  return (
    <div ref={ref1}>
      <SpanWord>{props.children}</SpanWord>
    </div>
  );
};