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
      <div
        onMouseOver={this.handleHover}
        style={{
          height: "120px",
          width: "200px",
          display: "flex",
          justifyContent: "flex-end"
        }}
      >
        <Link
          activeClass="active"
          className="navlink"
          to={to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          style={{ display: "flex" }}
        >
          {/* <Texty type="left" mode="reverse">
            {this.state.show && to.toUpperCase()}
          </Texty>{" "} */}
          <div style={{ fontSize: "1.5rem" }}>
            {this.state.show && to.toUpperCase()}
          </div>
          <svg style={{ width: "60px", height: "120px" }}>
            <circle cx="20" cy="8" r="5" fill="black" />
          </svg>
        </Link>
      </div>
    );
  }
}
