import React, { Component } from 'react'
import Simplex from "./Simplex";

export default class SimplexCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = { rotation: 0 };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    requestAnimationFrame(this.tick);
  }

  tick() {
    const rotation = this.state.rotation + 0.04;
    this.setState({ rotation });
    requestAnimationFrame(this.tick);
  }

  render() {
    return <Simplex rotation={this.state.rotation} width={200} height={200} />;
  }
}

