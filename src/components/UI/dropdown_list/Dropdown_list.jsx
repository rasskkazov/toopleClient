import classes from "./Dropdown_list.module.scss";

import IconTemplate from "../icon_template/IconTemplate.jsx";
import chevron from "./chevron.svg";

import { useState } from "react";
function Dropdown({ name, numberOfElements, elements }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`${classes.dropdown} ${isOpen ? classes.open : ""}`}>
            <button
                className={classes.dropdown__btn}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={`${classes.dropdown__chevron}`}>
                    <img src={chevron} alt="chevron" />
                </div>
                <div>{name}</div>
                {!isOpen && (
                    <div className={`${classes.dropdown__counter}`}>
                        <IconTemplate number={numberOfElements} />
                    </div>
                )}
            </button>

            {elements && (
                <div className={`${classes.dropdown__doersList}`}>
                    <div
                        className={`${classes.dropdown__wrapper}`}
                        style={{ minHeight: "0" }}
                    >
                        <ul>
                            {elements.map((element, index) => (
                                <li key={index}>{element}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
            {!isOpen && <hr />}
        </div>
    );
}
export default Dropdown;
