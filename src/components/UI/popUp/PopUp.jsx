import classes from "./PopUp.module.scss";
import closeIcon from "./close.svg";
function PopUp({ isOpen, children, onClose }) {
    function handleOverlayClick(e) {
        if (e.target.className === classes.overlay) {
            onClose();
        }
    }
    return (
        <>
            {isOpen && (
                <div className={classes.overlay} onClick={handleOverlayClick}>
                    <div className={classes.popUp}>
                        <button
                            className={classes.popUp__close}
                            onClick={onClose}
                        >
                            <img src={closeIcon} alt="close"></img>
                        </button>
                        {children}
                    </div>
                </div>
            )}
        </>
    );
}
export default PopUp;
