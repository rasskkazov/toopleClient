import "../stylesheets/Course.scss";

import { useParams } from "react-router-dom";

import Dropdown from "../components/UI/dropdown_list/Dropdown_list";
import AdCard from "../components/AdCard";
import CourseDropDownSkeleton from "../components/skeletons/courseDropdown";

import fetchCourse from "../api/fetchCourse";
import useAuthToken from "../hooks/useAuthToken";
import { useEffect, useState } from "react";
function Course() {
    const [authToken] = useAuthToken();
    const [courseData, setCourseData] = useState();
    let { courseId } = useParams();
    useEffect(() => {
        async function setData() {
            const data = await fetchCourse(courseId, authToken);
            setCourseData(data[0]);
        }
        setData();
    }, [authToken, courseId]);
    return (
        <div className="course">
            {courseData && (
                <>
                    <h1>{courseData.courseName}</h1>
                    <h2>{courseData.teacherName}</h2>
                    <ul>
                        {courseData.tasks.map((task) => (
                            <li key={task.id}>
                                <Dropdown
                                    name={task.name}
                                    numberOfElements={task.numberOfDoers}
                                    elements={task.ads.map((ad) => (
                                        <AdCard ad={ad} />
                                    ))}
                                />
                            </li>
                        ))}
                    </ul>
                </>
            )}
            {!courseData && <CourseDropDownSkeleton />}
        </div>
    );
}
export default Course;
