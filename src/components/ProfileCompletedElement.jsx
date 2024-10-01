import "../stylesheets/ProfileCompletedElement.scss";

import IconTemplate from "./UI/icon_template/IconTemplate";
import useIcon from "../img/i/user.svg";
function ProfileCompletedElement({ courseName, teacherName, tasks }) {
    return (
        <div className="completed">
            <div className="completed__courseName">{courseName}</div>
            <div className="completed__teacher">{teacherName}</div>
            <div className="completed__tasks">
                {tasks.map((task, index) => (
                    <div key={index} className="completed__task">
                        <div className="completed__taskName">
                            {task.taskName}
                        </div>
                        <div className="completed__timesCompleted">
                            <IconTemplate
                                icon={useIcon}
                                number={task.timesCompleted}
                            />
                        </div>
                    </div>
                ))}
            </div>
            <hr />
        </div>
    );
}
export default ProfileCompletedElement;
