import React from "react";
import Tone from "tone";
import "./Keyboard.css";
import styled from "@emotion/styled";
import { connect } from "react-redux";
import { get } from "dot-prop-immutable";
import { triggerAttack, triggerRelease } from "../actions/actions";
import { EPERM } from "constants";

class NotePress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      xPos: 0,
      yPos: 0
    };

    this.notes = [
      "C1",
      "C#1",
      "D1",
      "D#1",
      "E1",
      "F1",
      "F#1",
      "G1",
      "G#1",
      "A1",
      "A#1",
      "B1",
      "C2",
      "C#2",
      "D2",
      "D#2",
      "E2",
      "F2",
      "F#2",
      "G2",
      "G#2",
      "A2",
      "A#2",
      "B2"
    ];

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleRelease = this.handleRelease.bind(this);
  }

  onKeyDown(e) {
    // let note = Tone.Frequency(e.keyCode, "midi").toNote();
    // for (let i = this.notes.length - 1; i >= 0; i--) {
    //   if (this.notes[i] === note) {
    //     this.props.onKeyDown(note);
    //   }
    // }
  }

  // getFrequency(note){
  //   this.notes,
  // }

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
    let keys = this.notes.map((key, index) => {
      if (key.indexOf("#") === -1) {
        return (
          <div
            className="keyboard__key keyboard__key--major"
            data-value={key}
            key={index}
            onKeyDown={this.onKeyDown}
            onKeyUp={this.handleRelease}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          />
        );
      } else {
        return (
          <div
            className="keyboard__key keyboard__key--minor"
            data-value={key}
            key={index}
            onKeyDown={this.onKeyDown}
            onKeyUp={this.handleRelease}
            onMouseDown={this.handleMouseDown}
            onMouseUp={this.handleMouseUp}
          />
        );
      }
    });

    return (
      <GridContainer>
        <ClickContainer
          onMouseDown={this.handleMouseDown}
          onMouseUp={this.handleMouseUp}
          onMouseMove={this.handleMouseMove}
        ></ClickContainer>
        <Number id="dbg">X: {this.state.xPos}
        <br/>
        Y: {this.state.yPos}
        </Number>
      </GridContainer>
    );
  }
}

var elem = document.getElementById("container");
// elem.addEventListener("mousemove", handleMouseMove, false);

var dbg = document.getElementById("dbg");

const mapStateToProps = (state, ownProps) => {
  const _note = get(state, "triggerAttack.note");
  // const _note = get(state, "triggerMaster.note");
  return { note: _note === undefined ? "C3" : _note };
};

const mapDispatchToProps = dispatch => {
  return {
    triggerAttack: note => dispatch(triggerAttack(note)),
    triggerRelease: note => dispatch(triggerRelease(note))
    // triggerMaster: note => dispatch(triggerMaster(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotePress);

const ClickContainer = styled.div`
  height: 50vh;
  width: 50vw;
  background-color: grey;
`;

const Number = styled.div`
  height: 10vh;
  width: 25vw;
  background-color: orange;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
`;
