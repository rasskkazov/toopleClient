import "../stylesheets/CourseCard.scss";

import IconTemplate from "../components/UI/icon_template/IconTemplate.jsx";
import iconWorkCompleted from "../img/i/work_completed.svg";

function CourseCard({ courseName, teacherName, numberOfWorks }) {
    return (
        <div className="course-card">
            <div className="course-card__top">
                <div className="course-card__title">{courseName}</div>
            </div>
            <div className="course-card__bottom">
                <div className="course-card__teacher">{teacherName}</div>
                <IconTemplate icon={iconWorkCompleted} number={numberOfWorks} />
            </div>
        </div>
    );
}
export default CourseCard;
