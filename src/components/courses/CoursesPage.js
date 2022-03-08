import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

const CoursesPage = (props) => {
  const [course, setCourse] = useState({ title: " " });

  const handleChange = (event) => {
    const course = { title: event.target.value };
    setCourse(course);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.actions.createCourse(course);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Courses</h2>
      <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />

      <input type="submit" value="Save" />
      {props.courses.map((course) => (
        <div key={course.title}>{course.title}</div>
      ))}
    </form>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
