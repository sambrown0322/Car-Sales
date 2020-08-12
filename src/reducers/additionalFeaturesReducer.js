import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/actions";

export const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: [],
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 },
  ],
};

export const additionalFeaturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      //   console.log("here");
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload],
        },
        additionalPrice: action.payload.price + state.additionalPrice,
        additionalFeatures: state.additionalFeatures.filter(
          (feat) => feat.id !== action.payload.id
        ),
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(
            (feat) => feat.id !== action.payload.id
          ),
        },
        additionalPrice: state.additionalPrice - action.payload.price,
        additionalFeatures: [...state.additionalFeatures, action.payload],
        // state.additionalFeatures.filter(
        //   (feat) => feat.id !== action.payload.id
        // ),
      };
    default:
      return state;
  }
};
