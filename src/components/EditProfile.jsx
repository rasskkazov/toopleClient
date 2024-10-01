import "../stylesheets/EditProfile.scss";

import InputField from "./UI/input_field/InputField";
import BlueButton from "./UI/blue_button/BlueButton";
import { useState } from "react";
function EditProfile({ previuosData, onSubmit }) {
    const [data, setData] = useState(previuosData);
    function handleSubmit(e) {
        const namePattern = /^[А-ЯЁ][а-яё]*$/;
        if (!namePattern.test(data.name)) {
            alert('Введите красивое имя, например, "Юльча"');
            return;
        }
        if (!namePattern.test(data.surName)) {
            alert('Введите красивую фамилию, например, "Игуменова"');
            return;
        }
        if (data.contacts.type === "Пусто" || data.contacts.value === "Пусто") {
            alert("А контакты?! С вами же не свяжутся...");
            return;
        }
        if (!data.contacts.type || !data.contacts.value) {
            alert("А контакты?! С вами же не свяжутся...");
            return;
        }
        e.preventDefault();
        onSubmit(data);
    }
    return (
        <div className="editProfile">
            <form>
                <InputField
                    placeholder={"Богвзян"}
                    label={{ text: "Имя", for: "name" }}
                    type={"text"}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    value={data.name}
                />
                <InputField
                    placeholder={"Рассказов"}
                    label={{ text: "Фамилия", for: "surname" }}
                    type={"text"}
                    onChange={(e) =>
                        setData({ ...data, surName: e.target.value })
                    }
                    value={data.surName}
                />
                <div className="editProfile__contacts">
                    <InputField
                        placeholder={"telegram"}
                        label={{ text: "Способ связи", for: "typeOfContact" }}
                        type={"text"}
                        onChange={(e) =>
                            setData({
                                ...data,
                                contacts: {
                                    type: e.target.value,
                                    value: data.contacts.value,
                                },
                            })
                        }
                        value={data.contacts.type}
                    />
                    <InputField
                        placeholder={"t.me/myTg"}
                        label={{ text: "Контакт", for: "valueOfContact" }}
                        type={"text"}
                        onChange={(e) =>
                            setData({
                                ...data,
                                contacts: {
                                    type: data.contacts.type,
                                    value: e.target.value,
                                },
                            })
                        }
                        value={data.contacts.value}
                    />
                </div>
            </form>
            <BlueButton onClick={handleSubmit}>Сохранить</BlueButton>
        </div>
    );
}

export default EditProfile;
