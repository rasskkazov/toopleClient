import address from "./addres";
async function fetchCourses() {
    const response = await fetch(address + "/courses", {
        method: "GET",
        headers: {
            "Content-Type": "application/json;",
        },
    });
    const data = await response.json();
    return data;
}
export default fetchCourses;
