import classes from "./BlueButton.module.scss";

function BlueButton({ onClick, children }) {
    return (
        <button className={classes.blueButton} onClick={onClick}>
            {children}
        </button>
    );
}
export default BlueButton;
