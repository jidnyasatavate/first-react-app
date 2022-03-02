import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInputValue } from "../../redux/actions/courseActions";

const CoursesPage = () => {
  const textval = useRef();
  const dispatch = useDispatch();
  // const inputValue = useSelector((state) => state.courseReducer.value);
  const inputValue = useSelector((state) => state);
  console.log("State is ---", inputValue);

  const sendTextValueHandler = () => {
    const inputVal = textval.current.value;
    dispatch(changeInputValue(inputVal));
  };

  return (
    <>
      <input type="text" ref={textval} />
      <button onClick={sendTextValueHandler}>Save</button>
    </>
  );
};
export default CoursesPage;
