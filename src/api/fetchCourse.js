import address from "./addres";
async function fetchCourse(id, authToken) {
    const response = await fetch(
        address + `/courses/${id}`,
        // `https://65646c94ceac41c0761e28ba.mockapi.io/toople/course`
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json;",
                Authorization: `Bearer ${authToken}`,
            },
        }
    );
    const data = await response.json();
    return data;
}
export default fetchCourse;
