import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_COURSE_SUCCESS:
      return [...state, { ...action.courses }];
    case types.UPDATE_COURSE_SUCCESS:
      return state.map((course) =>
        course.id === action.courses.id ? action.courses : course
      );
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
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
