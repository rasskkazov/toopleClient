import "../stylesheets/Courses.scss";

import CourseCard from "../components/CourseCard.jsx";
import CourseCardSkeleton from "../components/skeletons/courseCard";
import useSearchFilter from "../hooks/useSearchFilter.jsx";

import fetchCourses from "../api/fetchCourses.js";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Courses() {
    const [coursesData, setCoursesData] = useState([]);
    const [displayedCourses, setDisplayedCourses] = useState([]);

    useEffect(() => {
        async function setData() {
            const fetchedData = await fetchCourses();
            setDisplayedCourses(fetchedData);
            setCoursesData(fetchedData);
            setCoursesData((prev) => pinSortParameter(prev));
        }
        setData();
    }, []);
    const [searchBar] = useSearchFilter(coursesData, setDisplayedCourses);
    return (
        <div className="courses">
            <div className="inputContainer">{searchBar}</div>
            <ul className="coursesList">
                {displayedCourses.length === 0 && (
                    <>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <li key={index}>
                                <CourseCardSkeleton />
                            </li>
                        ))}
                    </>
                )}
                {displayedCourses.map((courseData) => (
                    <li key={courseData.id}>
                        <Link
                            to={`/courses/${courseData.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <CourseCard
                                courseName={courseData.name}
                                teacherName={courseData.teacherName}
                                numberOfWorks={
                                    courseData.numberOfCompletedWorks
                                }
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Courses;
function pinSortParameter(coursesData) {
    return coursesData.map((course) => {
        course.searchBy = [course.name, course.teacherName];
        return course;
    });
}
