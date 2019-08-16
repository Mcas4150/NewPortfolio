import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Texty from "rc-texty";
import "rc-texty/assets/index.css";

export default class ScrollLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    const { to } = this.props;
    return (
      <Link
        activeClass="active"
        className="monument"
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onMouseEnter={this.handleHover}
        style={{ display: "flex" }}
      >
        <Texty type="left" mode="reverse">
          {this.state.show && to.toUpperCase()}
        </Texty>{" "}
        <svg style={{ width: "80px", height: "80px" }}>
          <circle cx="40" cy="25" r="15" fill="black" />
        </svg>
      </Link>
    );
  }
}
