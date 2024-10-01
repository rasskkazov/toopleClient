import "../stylesheets/SelectList.scss";

import BlueButton from "../components/UI/blue_button/BlueButton.jsx";
import useSearchFilter from "../hooks/useSearchFilter.jsx";

import { useMemo, useState } from "react";
function SelectList({
    name,
    value,
    elements,
    onAdd,
    onSelect,
    title,
    buttonTitle,
}) {
    const [displayedElements, setDisplayedElements] = useState(elements);
    const [searchBar] = useSearchFilter(elements, setDisplayedElements);
    useMemo(() => {
        setDisplayedElements(() =>
            [...elements].sort((a, b) => {
                if (a["sortBy"] === "newElement") return -1;
                return a["sortBy"]?.localeCompare(b["sortBy"]);
            })
        );
    }, [elements]);

    return (
        <div className="selectList">
            <div className="selectList__title">{title}</div>
            <div className="selectList__search">{searchBar}</div>

            <fieldset>
                {displayedElements.length === 0 && (
                    <div className="selectList__empty">Загрузка... </div>
                )}
                {displayedElements.map((element, index) => (
                    <div key={index} className="selectList__element">
                        <input
                            type="radio"
                            id={element.value}
                            name={name}
                            value={element.value}
                            checked={element.value === value}
                            onChange={() => {
                                onSelect(element);
                            }}
                        />
                        <label htmlFor={element.value}>
                            {element.elementToDislay}
                        </label>
                    </div>
                ))}
            </fieldset>

            <div className="selectList__addBtn">
                <BlueButton onClick={onAdd}>{buttonTitle}</BlueButton>
            </div>
        </div>
    );
}

export default SelectList;
