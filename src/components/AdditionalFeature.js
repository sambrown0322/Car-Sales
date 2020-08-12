import React from "react";
// import {
//   initialState,
//   additionalFeaturesReducer,
// } from "../reducers/additionalFeaturesReducer";
import { connect } from "react-redux";
import { addFeature } from "../actions/actions";

const AdditionalFeature = (props) => {
  // const [state, dispatch] = useReducer(additionalFeaturesReducer, initialState);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => props.addFeature(props.feature)}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     car: state.car,
//     additionalPrice: state.additionalPrice,
//     additionalFeatures: state.additionalFeatures,
//   };
// };
export default connect(null, { addFeature })(AdditionalFeature);
