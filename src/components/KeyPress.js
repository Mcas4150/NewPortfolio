import React, { Component } from "react";
import { connect } from "react-redux";
import { changeDial } from "../actions/actions";
import { get } from "dot-prop-immutable";
import styled from "@emotion/styled";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Slider.css";

class KeyPress extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.minValue = this.props.min === undefined ? 0 : this.props.min;
    this.maxValue = this.props.max === undefined ? 100 : this.props.max;
  }

  get dialValue() {
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

  render() {
    return (
      <Dial id={this.idName} className="dial">
        <label className="dial-name">{this.props.displayName}</label>
        <Slider
          vertical={true}
          value={this.dialValue}
          onChange={this.handleChange}
          min={this.minValue}
          max={this.maxValue}
          step={this.props.step}
        />
      </Dial>
    );
  }
}

// const Slider2 = (props) => {
//   let slider23 = new Nexus.Slider(props.id, {

//     'size': [120,20],
//     'min': props.min,
//     'max': props.max,
//     'step': props.step,
//     'value': props.value
//   })
//   slider23.on('change', function(props.onChange))

// }

const Dial = styled.div`
  display: flex;
  flex-direction: column;
`;

const mapStateToProps = (state, ownProps) => {
  const value = get(state, `${ownProps.parentName}.${ownProps.name}`);
  return { dialValue: value === undefined ? 0 : value };
};

const mapDispatchToProps = dispatch => {
  return {
    changeDial: dial => dispatch(changeDial(dial))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KeyPress);
