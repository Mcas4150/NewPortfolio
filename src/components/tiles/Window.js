import React, { useContext, useState } from "react";
import styled from "@emotion/styled";
import AppContext from "../context-file";
import Draggable from "react-draggable";

const Window = (props) => {
  const [activeDrags, setActiveDrags] = useState(0);
  const context = useContext(AppContext);

  // state = {
  //   activeDrags: 0,
  //   deltaPosition: {
  //     x: 0,
  //     y: 0,
  //   },
  //   controlledPosition: {
  //     x: -400,
  //     y: 200,
  //   },
  // // };

  // handleDrag = (e, ui) => {
  //   const { x, y } = this.state.deltaPosition;
  //   this.setState({
  //     deltaPosition: {
  //       x: x + ui.deltaX,
  //       y: y + ui.deltaY,
  //     },
  //   });
  // };

  const onStart = () => {
    setActiveDrags(activeDrags + 1);
  };

  // onStop = () => {
  //   this.setState({ activeDrags: --this.state.activeDrags });
  // };

  // const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
  // let dimensions = this.props.dimensions;

  return (
    // <Draggable handle="strong" {...dragHandlers}>
    <div>
      {context.showWindow && (
        <Draggable handle="strong" onStart={() => true}>
          <Frame>
            <strong className="cursor">
              <Title>{props.title}</Title>
            </strong>
            <Content>{props.children}</Content>
          </Frame>
        </Draggable>
      )}
    </div>
  );
};

const Frame = styled.div`
  position: relative;
  background-color: #d8d8d8;
  margin: 25px;
  padding: 15px;
  border: 1.85px solid black;
  box-shadow: 5px 5px #888888;
  height: 100%;
  overflow-y: hidden;
  // overflow-x: hidden;
  opacity: 98%;
  border-radius: 5px;
`;

const Title = styled.div`
  background-color: #e7e7e7;
  padding: 5px;
  font-weight: bold;
  font-size: 18px;
  justify-content: center;
  // margin: 15px;
  border: 1.85px solid black;
`;

const Content = styled.div`
  background-color: #e7e7e7;
  // margin: 15px;
  text-align: justify;
  font-family: Verdana;
  margin-top: 15px;
  font-size: 16px;
  padding: 5px;
  border: 1.85px solid black;
  opacity: 90%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  // overflow: auto;
`;

export default Window;
