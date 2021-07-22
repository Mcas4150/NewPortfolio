// import { CHANGE_DIAL } from "../actions/types";
// import * as dotProp from "dot-prop-immutable";

// import SynthMain from "../components/synth/synthMain";



// export default function SynthesizerReducer(state = {}, action) {
//   switch (action.type) {
//     case CHANGE_DIAL:
//       SynthMain.updateSetting(action.payload.name, action.payload.dialValue);

//       return dotProp.set(
//         state,
//         `${action.payload.parentName}.${action.payload.name}`,
//         action.payload.dialValue
//       );

//     default:
//       return state;
//   }
// }
