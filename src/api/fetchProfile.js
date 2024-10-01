import address from "./addres";
async function fetchProfile(id, authToken, navigate) {
    try {
        const response = await fetch(address + `/profile/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json;",
                Authorization: `Bearer ${authToken}`,
            },
        });
        if (response.status === 401) {
            navigate("/login");
            return response;
        } else {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error("Token error:", error);
    }
}
export default fetchProfile;
