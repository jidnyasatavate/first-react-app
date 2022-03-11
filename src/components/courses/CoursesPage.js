import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import * as authorActions from "../../redux/actions/authorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import CourseList from "./CourseList";
import { Redirect } from "react-router-dom";

const CoursesPage = (props) => {
  // const [course, setCourse] = useState({ title: " " });

  // const handleChange = (event) => {
  //   const course = { title: event.target.value };
  //   setCourse(course);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   props.actions.createCourse(course);
  // };
  const [redirectPg, setRedirectPg] = useState({
    redirectToAddCoursePage: false,
  });
  const { actions, courses, authors } = props;
  useEffect(() => {
    if (courses.length === 0) {
      actions.loadCourses().catch((error) => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      actions.loadAuthors().catch((error) => {
        alert("Loading authors failed" + error);
      });
    }
  }, []);

  return (
    <>
      {/* <form onSubmit={handleSubmit}> */}
      {redirectPg.redirectToAddCoursePage && <Redirect to="/course" />}
      <h2>Courses</h2>
      {/* <h3>Add Course</h3>
      <input type="text" onChange={handleChange} value={course.title} />

      <input type="submit" value="Save" /> */}

      <button
        style={{ marginBottom: 20 }}
        className="btn btn-primary add-course"
        onClick={() => setRedirectPg({ redirectToAddCoursePage: true })}
      >
        Add Course
      </button>
      <CourseList courses={courses} />
      {/* {props.courses.map((course) => (
        <div key={course.title}>{course.title}</div>
      ))} */}
      {/* </form> */}
    </>
  );
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map((course) => {
            return {
              ...course,
              authorName: state.authors.find((a) => a.id === course.authorId)
                .name,
            };
          }),
    authors: state.authors,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadCourses: bindActionCreators(courseActions.loadCourses, dispatch),
      loadAuthors: bindActionCreators(authorActions.loadAuthors, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
