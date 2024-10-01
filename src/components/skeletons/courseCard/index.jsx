import React from "react";
import ContentLoader from "react-content-loader";
import "./CourseCardSkeleton.scss";
const CourseCardSkeleton = (props) => (
    <ContentLoader
        speed={2}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        className="courseCardSkeleton"
    >
        <rect x="0" y="0" rx="30" ry="30" />
    </ContentLoader>
);

export default CourseCardSkeleton;
