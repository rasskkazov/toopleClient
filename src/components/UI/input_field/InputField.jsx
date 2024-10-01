import classes from "./InputField.module.scss";

function InputField({
    placeholder,
    label,
    id,
    type,
    name,
    icon,
    onChange,
    value,
}) {
    return (
        <div className={classes.inputField}>
            {label && <label htmlFor={label.for}>{label.text}</label>}
            <input
                id={label ? label.for : id}
                placeholder={placeholder}
                name={name}
                type={type}
                onChange={onChange}
                value={value}
            />
            {icon && (
                <div className={classes.icon}>
                    <img src={icon} alt="icon" />
                </div>
            )}
        </div>
    );
}
export default InputField;
