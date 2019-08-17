import React, { Component } from "react";
// import Block from "./Block";

export default class Blocks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startAnimation: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    // this.setState(prevState => ({
    //   startAnimation: !prevState.startAnimation
    // }));
  }

  render() {


    return <div>
{/*
    <Block viewbox="0 0 100 100"></Block>
    <Block viewbox="100 100 100 100"></Block> */}
    {/* <Block viewbox="0 100 100 0"></Block> */}
    </div>;
  }
}
