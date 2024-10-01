import "../stylesheets/CreateAd.scss";

import SelectList from "../components/SelectList.jsx";
import ElementToSelect from "../components/ElementToSelect.jsx";
import AddCourseForm from "../components/AddCourseForm.jsx";
import AddTaskForm from "../components/AddTaskForm.jsx";
import PopUp from "../components/UI/popUp/PopUp.jsx";
import SetPrice from "../components/SetPrice.jsx";

import fetchCourses from "../api/fetchCourses.js";
import fetchTasksByCourse from "../api/fetchTasksByCourse.js";
import createAd from "../api/createAd.js";
import { AuthContext } from "../context/index.js";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
function CreateAd() {
    const context = useContext(AuthContext);
    const authToken = context.authToken;
    const [listCourseElements, setListCourseElements] = useState([]);
    const [listTaskElements, setListTaskElements] = useState([]);
    const [isAddingCourse, setIsAddingCourse] = useState(false);
    const [isAddingTask, setIsAddingTask] = useState(false);

    const [selectedCourse, setSelectedCourse] = useState();
    const [selectedCourseData, setSelectedCourseData] = useState();

    const [selectedTask, setSelectedTask] = useState();
    const [selectedTaskData, setSelectedTaskData] = useState();

    const [customerVariantPrice, setCustomerVariantPrice] = useState();
    const [doerVariantPrice, setDoerVariantPrice] = useState();

    const navigate = useNavigate();
    useEffect(() => {
        async function setData() {
            const coursesData = await fetchCourses();
            setListCourseElements(
                coursesData.map((course) => ({
                    elementToDislay: (
                        <ElementToSelect
                            title={course.name}
                            subtitle={course.teacherName}
                        />
                    ),
                    name: course.name,
                    teacherName: course.teacherName,
                    value: course.id,
                    sortBy: course.name,
                    searchBy: [course.name, course.teacherName],
                }))
            );
        }
        setData();
    }, []);
    async function handleSelectCourse(selectedCourseData) {
        setSelectedCourse(selectedCourseData.value);
        setSelectedCourseData({
            name: selectedCourseData.name,
            teacherName: selectedCourseData.teacherName,
        });
        const tasksData = await fetchTasksByCourse(selectedCourseData.value);
        setListTaskElements(
            tasksData.map((task) => ({
                elementToDislay: <ElementToSelect title={task.name} />,
                name: task.name,
                value: task.id,
                sortBy: task.name,
                searchBy: [task.name],
                courseId: task.courseId,
            }))
        );
        setSelectedTask(undefined);
    }

    async function handleSelectTask(selectedTaskData) {
        setSelectedTask(selectedTaskData.value);
        setSelectedTaskData({
            name: selectedTaskData.name,
        });
    }

    function addNewCourse(newCourseName, newTeacherName) {
        setIsAddingCourse(false);
        setListCourseElements((prev) => {
            if (
                prev.some(
                    (element) =>
                        element.name === newCourseName &&
                        element.teacherName === newTeacherName
                )
            )
                return prev;
            return [
                ...prev,
                {
                    elementToDislay: (
                        <ElementToSelect
                            title={newCourseName}
                            subtitle={newTeacherName}
                        />
                    ),
                    name: newCourseName,
                    teacherName: newTeacherName,
                    value: newCourseName + newTeacherName,
                    sortBy: "newElement",
                    searchBy: [newCourseName, newTeacherName],
                },
            ];
        });
    }

    function addNewtask(newTaskName) {
        setIsAddingTask(false);
        setListTaskElements((prev) => {
            if (prev.some((element) => element.name === newTaskName)) {
                return prev;
            }
            return [
                ...prev,
                {
                    elementToDislay: <ElementToSelect title={newTaskName} />,
                    name: newTaskName,
                    value: newTaskName,
                    sortBy: "newElement",
                    searchBy: [newTaskName],
                    courseId: selectedCourse,
                },
            ];
        });
    }

    function publish() {
        const createAdData = {
            courseId: selectedCourse,
            courseName: selectedCourseData.name,
            courseTeacher: selectedCourseData.teacherName,
            taskId: selectedTask,
            taskName: selectedTaskData.name,
            customerVariantPrice: customerVariantPrice,
            doerVariantPrice: doerVariantPrice,
        };
        createAd(createAdData, authToken, navigate);
    }
    return (
        <div className="createAd">
            <h1>Разместить объявление</h1>
            <div className="createAd__form">
                <div className="createAd__subForm">
                    <SelectList
                        name="courseList"
                        value={selectedCourse}
                        elements={listCourseElements}
                        onAdd={() => setIsAddingCourse(true)}
                        onSelect={handleSelectCourse}
                        title="Курс"
                        buttonTitle={"Добавить другой курс"}
                    />
                </div>
                {selectedCourse && (
                    <div className="createAd__subForm">
                        <SelectList
                            name="taskList"
                            value={selectedTask}
                            elements={listTaskElements}
                            onAdd={() => setIsAddingTask(true)}
                            onSelect={handleSelectTask}
                            title="Задание"
                            buttonTitle={"Добавить другое задание"}
                        />
                    </div>
                )}
                {selectedTask && (
                    <div className="createAd__priceSubForm">
                        <SetPrice
                            title="Цена"
                            buttonTitle="Опубликовать"
                            settingCustomerPrice={setCustomerVariantPrice}
                            settingDoerPrice={setDoerVariantPrice}
                            publish={publish}
                        />
                    </div>
                )}
            </div>
            <PopUp
                isOpen={isAddingCourse}
                onClose={() => setIsAddingCourse(false)}
            >
                <AddCourseForm onSubmit={addNewCourse} />
            </PopUp>
            <PopUp isOpen={isAddingTask} onClose={() => setIsAddingTask(false)}>
                <AddTaskForm onSubmit={addNewtask} />
            </PopUp>
        </div>
    );
}

export default CreateAd;
