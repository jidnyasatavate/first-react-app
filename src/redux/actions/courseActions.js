// export const changeInputValue = (value) => ({
//   type: "CHANGE_INPUT_VALUE",
//   payload: value,
//   // payload: [value],
// });

import * as types from "../actions/actionTypes";
export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course: course,
  };
}
