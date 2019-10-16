import React from "react";
import Tone from "tone";
import "./Keyboard.css";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { get } from "dot-prop-immutable";
import Envelope from "./Envelope";
import Filter from "./Filter";
import Amplifier from "./Amplifier";
import {
  triggerAttack,
  triggerRelease,
  setFrequency
} from "../actions/actions";
import { EPERM } from "constants";

class NotePress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xPos: 0,
      yPos: 0
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);

    this.handleRelease = this.handleRelease.bind(this);
  }

  get frequencyValue() {
    return this.props.dialValue;
  }

  get idName() {
    return `${this.props.parentName}-${this.props.name}`;
  }

  handleChange(newValue) {
    this.props.changeDial({
      name: this.props.name,
      dialValue: newValue,
      parentName: this.props.parentName
    });
  }

  handleMouseDown(e) {
    new Tone.start();
    this.props.triggerAttack(e.target.dataset.value);
  }

  handleMouseUp(e) {
    this.props.triggerRelease(e.target.dataset.value);
  }

  handleMouseMove(e) {
    var m_posx = 0,
      m_posy = 0,
      e_posx = 0,
      e_posy = 0,
      obj = this;
    //get mouse position on document crossbrowser
    if (!e) {
      e = window.event;
    }
    if (e.pageX || e.pageY) {
      m_posx = e.pageX;
      m_posy = e.pageY;
      // this.props.setFrequency(this.state.xPos);
      this.props.setFrequency(e.pageX);
      this.setState({
        xPos: e.pageX,
        yPos: e.pageY
      });
    } else if (e.clientX || e.clientY) {
      m_posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      m_posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
      // this.props.setFrequency(this.state.xPos);
      this.props.setFrequency(
        e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft
      );
      this.setState({
        xPos:
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft,

        yPos:
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop
      });
      // this.props.changeDial({
      //   name: this.props.name,
      //   dialValue: newValue,
      //   parentName: this.props.parentName
      // });
      // this.handleChange(this.props.) {
      //   this.props.changeDial({
      //     name: this.props.name,
      //     dialValue: newValue,
      //     parentName: this.props.parentName
      //   });
      // }
    }
    //get parent element position in document
    if (obj.offsetParent) {
      do {
        e_posx += obj.offsetLeft;
        e_posy += obj.offsetTop;
      } while ((obj = obj.offsetParent));
    }
    // mouse position minus elm position is mouseposition relative to element:
    // dbg.innerHTML =
    //   " X Position: " + (m_posx - e_posx) + " Y Position: " + (m_posy - e_posy);
  }
  // handleMouseDown(e) {
  //   this.props.triggerMaster(e.target.dataset.value);
  // }

  handleRelease() {
    // this.props.onUp("");
  }

  render() {
    return (
      <GridContainer>
        <ClickContainer
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
        ></ClickContainer>
        <Envelope name={"envelope"} displayName={"envelope"} />
        {/* <Filter name={"filter"} displayName={"filter"} /> */}
        <Toggles>
          <Number id="dbg">
            Frequency: {this.state.xPos} Hz
            <br />
            Y: {this.state.yPos}
          </Number>
          <Amplifier name={"amplifier"} displayName={"amplifier"} />
        </Toggles>
      </GridContainer>
    );
  }
}

var elem = document.getElementById("container");
// elem.addEventListener("mousemove", handleMouseMove, false);

var dbg = document.getElementById("dbg");

// const mapStateToProps = (state, ownProps) => {
//   const value = get(state, `${ownProps.parentName}.${ownProps.name}`);
//   return { dialValue: value === undefined ? 0 : value };
// };

const mapStateToProps = (state, ownProps) => {
  const _note = get(state, "triggerAttack.note");
  const frequency = get(state, "setFrequency.frequency");
  // const _note = get(state, "triggerMaster.note");
  return {
    note: _note === undefined ? "C3" : _note,
    frequency: frequency === undefined ? 220 : frequency
  };
};

const mapDispatchToProps = dispatch => {
  return {
    triggerAttack: note => dispatch(triggerAttack(note)),
    triggerRelease: note => dispatch(triggerRelease(note)),
    setFrequency: frequency => dispatch(setFrequency(frequency))
    // triggerMaster: note => dispatch(triggerMaster(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotePress);

const ClickContainer = styled.div`
  height: 60vh;
  width: 80vw;
  background-color: #adcad6;
  border-left: 1px solid black;
`;

const Number = styled.div`
  height: 10vh;
  width: 25vw;
  background-color: orange;
`;

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Toggles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
