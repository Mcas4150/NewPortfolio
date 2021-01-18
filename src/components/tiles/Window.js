import React, { Component } from "react";
import styled from "@emotion/styled";
import Draggable from "react-draggable";

export default class Window extends Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0,
    },
    controlledPosition: {
      x: -400,
      y: 200,
    },
  };

  // handleDrag = (e, ui) => {
  //   const { x, y } = this.state.deltaPosition;
  //   this.setState({
  //     deltaPosition: {
  //       x: x + ui.deltaX,
  //       y: y + ui.deltaY,
  //     },
  //   });
  // };

  // onStart = () => {
  //   this.setState({ activeDrags: ++this.state.activeDrags });
  // };

  // onStop = () => {
  //   this.setState({ activeDrags: --this.state.activeDrags });
  // };

  render() {
    // const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      // <Draggable handle="strong" {...dragHandlers}>
      <Draggable handle="strong">
        <Frame>
          <strong className="cursor">
            <Title>{this.props.title}</Title>
          </strong>
          <Content>
            {this.props.children}

          </Content>
        </Frame>
      </Draggable>
    );
  }
}

const Frame = styled.div`
  background-color: #d8d8d8;
  margin: 25px;
  padding: 15px;
  border: 1.85px solid black;
  box-shadow: 5px 5px #888888;
  height: 100%;
  overflow-y: hidden;
  // overflow-x: hidden;
  opacity: 98%;
`;

const Title = styled.div`
  background-color: #e7e7e7;
  padding: 5px;
  height: 25px;
  font-weight: bold;
  justify-content: center;
  // margin: 15px;
  border: 1.85px solid black;
`;

const Content = styled.div`
  background-color: #e7e7e7;
  // margin: 15px;
  margin-top: 15px;
  border: 1.85px solid black;
  opacity: 90%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  // overflow: auto;
`;
