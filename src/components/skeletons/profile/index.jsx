import React from "react";
import ContentLoader from "react-content-loader";
import "./ProfileSkeleton.scss";
const ProfileSkeleton = (props) => (
    <ContentLoader
        speed={2}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
        className="profileSkeleton"
    >
        <rect x="0" y="0" rx="0" ry="0" className="name" />
        <rect x="0" y="98" rx="0" ry="0" className="contact" />
        <rect x="0" y="139" rx="0" ry="0" className="contact" />
    </ContentLoader>
);

export default ProfileSkeleton;
