import address from "./addres";
const markAsCompleted = async (ad, authToken) => {
    try {
        const response = await fetch(address + "/markAsCompleted", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
                authorization: "Bearer " + authToken,
            },
            body: JSON.stringify(ad),
        });
        if (response.status === 401) {
            console.error("Unauthorized");
            return response;
        }
        if (response.ok) {
            return response;
        } else {
            console.error("Marking failed");
        }
    } catch (error) {
        console.error("Error during marking:", error);
    }
};
export default markAsCompleted;
