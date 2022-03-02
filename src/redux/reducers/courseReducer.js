// const initialState = {
//   value: "",
// };

// const courseReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "CHANGE_INPUT_VALUE":
//       return {
//         ...state,
//         value: action.payload,
//       };
//     default:
//       return state;
//   }
// };

const initialState = [{ value: "" }];

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_INPUT_VALUE":
      return [...state, { value: action.payload }];

    default:
      return state;
  }
};

export default courseReducer;
