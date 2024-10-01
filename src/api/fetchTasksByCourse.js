import address from "./addres";
const fetchTasks = async (courseId) => {
    const response = await fetch(address + `/fetchTasks?courseId=${courseId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
    });
    const data = await response.json();
    return data;
};
export default fetchTasks;
