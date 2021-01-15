import React, { Component } from "react";
import { connect } from "react-redux";
import { changeDial } from "../../actions/actions";
import { get } from "dot-prop-immutable";
import SettingSlider from "./Slider";
import { Toggle } from "react-nexusui";
// import "./VoltageControlledAmplifier.css";

 class Amplifier extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.minValue = this.props.min === undefined ? 0 : this.props.min;
    // this.maxValue = this.props.max === undefined ? 100 : this.props.max;
  }


handleChange(newValue) {
  this.props.changeDial({
    name: "vcaLevel",
    dialValue: newValue,
    parentName: "amplifier"
  })
}

  render() {
    return (
      <div className="vca-grid">
       <Toggle
       onChange={this.handleChange}
       min={0}
       max={1}
       step={1}
       />
      </div>
    );
  }
}




// render() {
//   return (
//     <Dial id={this.idName} className="dial">
//       <label className="dial-name">{this.props.displayName}</label>
//       <Slider
//         vertical={true}
//         value={this.dialValue}
//         onChange={this.handleChange}
//         min={this.minValue}
//         max={this.maxValue}
//         step={this.props.step}
//       />
//     </Dial>
//   );
// }



const mapStateToProps = (state, ownProps) => {
  const value = get(state, `amplifier.vcaLevel`);
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
)(Amplifier);
