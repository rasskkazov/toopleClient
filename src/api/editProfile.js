import address from "./addres";
const editProfile = async (data, authToken) => {
    try {
        const response = await fetch(address + "/editProfile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                Authorization: "Bearer " + authToken,
            },
            body: JSON.stringify(data),
        });
        if (response.status === 401) {
            console.error("Unauthorized");
            return response;
        }
        if (response.ok) {
            return response;
        } else {
            alert("ошибка");
            console.error("creation failed");
        }
    } catch (error) {
        console.error("Error during creation:", error);
    }
};
export default editProfile;
