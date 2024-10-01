import React from "react";
import ContentLoader from "react-content-loader";
import "./CourseDropdownSkeleton.scss";
const CourseDropdownSkeleton = (props) => (
    <ContentLoader
        speed={2}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        className="courseDropdownSkeleton"
    >
        <rect x="0" y="0" rx="0" ry="0" className="courseName" />
        <rect x="0" y="61" rx="0" ry="0" className="teacherName" />
        <rect x="0" y="118" rx="0" ry="0" className="task" />
        <rect x="0" y="210" rx="0" ry="0" className="task" />
        <rect x="0" y="305" rx="0" ry="0" className="task" />
    </ContentLoader>
);

export default CourseDropdownSkeleton;
