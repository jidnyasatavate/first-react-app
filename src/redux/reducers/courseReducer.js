import * as types from "../actions/actionTypes";
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      return [...state, { ...action.course }];
    default:
      return state;
  }
}
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

// const initialState = {
//   arr: [],
// };

// const courseReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "CHANGE_INPUT_VALUE":
//       return {
//         ...state,
//         arr: [...state.arr, action.payload],
//       };

//     default:
//       return state;
//   }
// };

// export default courseReducer;
