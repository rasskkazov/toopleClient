import "../stylesheets/AddCourseForm.scss";

import InputField from "./UI/input_field/InputField";
import BlueButton from "../components/UI/blue_button/BlueButton.jsx";

import { useState } from "react";
function AddTaskForm({ onSubmit }) {
    const [newTaskName, setNewTaskName] = useState("");
    function handleSubmit(e) {
        if (newTaskName === "") {
            alert("чел...");
            return;
        }
        onSubmit(newTaskName);
    }

    return (
        <div className="addCourseForm">
            <form>
                <InputField
                    placeholder={"Название задания"}
                    label={{ text: "Задание", for: "taskName" }}
                    onChange={(e) => setNewTaskName(e.target.value)}
                />
            </form>
            <BlueButton onClick={handleSubmit}>Добавить Задание</BlueButton>
        </div>
    );
}
export default AddTaskForm;
