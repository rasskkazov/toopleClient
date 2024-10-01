import "../stylesheets/AddCourseForm.scss";

import InputField from "./UI/input_field/InputField";
import BlueButton from "../components/UI/blue_button/BlueButton.jsx";

import { useState } from "react";
function AddCourseForm({ onSubmit }) {
    const [newCourseName, setNewCourseName] = useState("");
    const [newTeacherName, setNewTeacherName] = useState("");
    function handleSubmit(e) {
        const namePattern = /^[А-ЯЁ][а-яё]+ [А-ЯЁ]\. ?[А-ЯЁ]\.$/;
        if (newCourseName === "") {
            alert("Название курса не может быть пустым, хотябы цифрами");
            return;
        }
        if (!namePattern.test(newTeacherName)) {
            alert("Преподователя лучше назвать: Фамилия И. О.");
            return;
        }
        onSubmit(newCourseName, newTeacherName);
    }

    return (
        <div className="addCourseForm">
            <form>
                <InputField
                    placeholder={"Курс"}
                    label={{ text: "Курс", for: "courseName" }}
                    onChange={(e) => setNewCourseName(e.target.value)}
                />
                <InputField
                    placeholder={"Фамилия И.О."}
                    label={{ text: "Преподаватель", for: "teacherName" }}
                    onChange={(e) => setNewTeacherName(e.target.value)}
                />
            </form>
            <BlueButton onClick={handleSubmit}>Добавить курс</BlueButton>
        </div>
    );
}
export default AddCourseForm;
