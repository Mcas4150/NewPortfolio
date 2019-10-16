import React, { Component } from 'react'

export default class Wiggle extends Component {



  componentDidMount() {
    this.props.logoTl
      .set(this.content, { autoAlpha: 1 }) // show content div
      .from(this.head, 0.5, { left: 100, autoAlpha: 0 });
    // .from(this.subhead, 0.5, { left: -100, autoAlpha: 0 }, "-=0.25");

    // added -0.25 seconds prior to end this.of timeline
    // .from(this.feature, 0.5, { scale: 0.5, autoAlpha: 0 }, "feature"); // added 0.5 seconds after end of timeline
    // .from(this.description, 0.5, { left: 100, autoAlpha: 0 }, "feature+=0.25")
    // .staggerFrom(this.icons, 0.2, { scale: 0, autoAlpha: 0 }, 0.1); //animate all icons with 0.1 second stagger
    this.props.play();

    // this.hoverTl
    //   .from(this.feature, 0.5, { scale: 0.5, autoAlpha: 0 }, "feature") // added 0.5 seconds after end of timeline
    //   .from(
    //     this.description,
    //     0.5,
    //     { left: 100, autoAlpha: 0 },
    //     "feature+=0.25"
    //   );
    this.tl.staggerTo(this.cards, 0.5, { autoAlpha: 1, y: -20 }, 0.1);
    this.tl.play();
  }


  render() {
    return (
      <div>

      </div>
    )
  }
}
