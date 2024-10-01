import "../stylesheets/ElementToSelect.scss";
function ElementToSelect({ title, subtitle }) {
    return (
        <div className="elementToSelect">
            <div className="elementToSelect__title">{title}</div>
            {subtitle && (
                <div className="elementToSelect__subtitle">{subtitle}</div>
            )}
        </div>
    );
}

export default ElementToSelect;
