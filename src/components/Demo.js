import React, { Component } from "react";
// import Texty from "rc-texty";
// import Button from "antd/lib/button";
// import Select from "antd/lib/select";
import "rc-texty/assets/index.css";
import { Parallax } from "rc-scroll-anim";
// import animType from "rc-texty/lib/animTypes";

import styled from "@emotion/styled";

// const { Option } = Select;

export default class Demo extends Component {
  // state = {
  //   show: true,
  //   mode: "smooth",
  //   type: "left"
  // };
  // onClick = () => {
  //   this.setState({
  //     show: !this.state.show
  //   });
  // };
  // onChange = type => {
  //   this.setState({
  //     type
  //   });
  // };

  // onModeChange = mode => {
  //   this.setState({
  //     mode
  //   });
  // };

  render() {
    let formula = Math.floor(Math.random() * 50) + 100;
    return (
      <div className="texty-demo" style={{ marginTop: 16 }}>
        {/* <div style={{ fontSize: 14, marginBottom: 16 }}>
          type:
          <Select
            onChange={this.onChange}
            defaultValue={this.state.type}
            style={{ width: 100, margin: "0 8px" }}
          >
            {Object.keys(animType).map(key => (
              <Option key={key} value={key}>
                {key}
              </Option>
            ))}
          </Select>
          mode:
          <Select
            onChange={this.onModeChange}
            defaultValue={this.state.mode}
            style={{ width: 100, marginLeft: 8 }}
          >
            {["smooth", "reverse", "random", "sync"].map(key => (
              <Option key={key} value={key}>
                {key}
              </Option>
            ))}
          </Select>
        </div>{" "} */}
        {/* <div style={{ display: "flex" }}>
          <svg onMouseEnter={this.onClick}>
            <circle cx="50" cy="50" r="50" fill="#529fca" />
          </svg>
          <Texty type={this.state.type} mode={this.state.mode}>
            {this.state.show && "Ant Motion"}
          </Texty>{" "}
        </div>
        <Button type="primary" onMouseOver={this.onClick}>
          Switch
        </Button> */}
        <Box
          animation={{ x: 0 }}
          style={{ transform: "translateX(-100px)", margin: "10px auto" }}
          className="code-box-shape"
        />
        <Box
          animation={{ scale: 1 }}
          style={{
            transform: "scale(0)",
            margin: "10px auto",
            backgroundColor: `rgb(${formula}, ${formula}, ${formula})`
          }}
          className="code-box-shape"
        />
        <Box
          animation={{ rotate: 360 }}
          style={{ margin: "10px auto" }}
          className="code-box-shape"
        />
        <Box
          animation={{ x: 1000, opacity: 1, playScale: [0.5, 0.8] }}
          style={{ transform: "translateX(-100px)", opacity: 0 }}
          className="code-box-shape"
        />
        <Box
          animation={[
            { x: 0, opacity: 1, playScale: [0, 0.2] },
            { y: 400, playScale: [0, 0.3] },
            { blur: "10px", playScale: [0, 0.5] }
          ]}
          style={{
            transform: "translateX(-100px)",
            filter: "blur(0px)",
            opacity: 0
          }}
          className="code-box-shape"
        />
        <Box
          animation={[
            { x: 800, opacity: 1, playScale: [0, 0.2] },
            { y: 400, playScale: [0, 0.3] },
            { blur: "10px", playScale: [0, 0.5] }
          ]}
          style={{
            transform: "translateX(-100px)",
            filter: "blur(0px)",
            opacity: 0
          }}
          className="code-box-shape"
        />
        <Box
          animation={[
            { x: 800, opacity: 1, playScale: [0, 0.2] },
            { y: 400, playScale: [0, 0.3] },
            { blur: "10px", playScale: [0, 0.5] }
          ]}
          style={{
            transform: "translateX(-100px)",
            filter: "blur(0px)",
            opacity: 0
          }}
          className="code-box-shape"
        />
        <Box
          animation={[
            { x: 800, opacity: 1, playScale: [0, 0.2] },
            { y: 400, playScale: [0, 0.3] },
            { blur: "10px", playScale: [0, 0.5] }
          ]}
          style={{
            transform: "translateX(-100px)",
            filter: "blur(0px)",
            opacity: 0
          }}
          className="code-box-shape"
        />
        <Box
          animation={[
            { x: 800, opacity: 1, playScale: [0, 0.2] },
            { y: 400, playScale: [0, 0.3] },
            { blur: "10px", playScale: [0, 0.5] }
          ]}
          style={{
            transform: "translateX(-100px)",
            filter: "blur(0px)",
            opacity: 0
          }}
          className="code-box-shape"
        />
        <Box
          animation={[
            { x: 800, opacity: 1, playScale: [0, 0.2] },
            { y: 400, playScale: [0, 0.3] },
            { blur: "10px", playScale: [0, 0.5] }
          ]}
          style={{
            transform: "translateX(-100px)",
            filter: "blur(0px)",
            opacity: 0
          }}
          className="code-box-shape"
        />
        <Box
          animation={[
            { x: 0, opacity: 1, playScale: [0, 0.2] },
            { y: 400, playScale: [0, 0.3] },
            { blur: "10px", playScale: [0, 0.5] }
          ]}
          style={{
            transform: "translateX(-100px)",
            filter: "blur(0px)",
            opacity: 0
          }}
          className="code-box-shape"
        />
      </div>
    );
  }
}

const Box = styled(Parallax)`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: blue;
`;
