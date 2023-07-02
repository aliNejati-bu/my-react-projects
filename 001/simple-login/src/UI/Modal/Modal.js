import ReactDOM from "react-dom";

import Card from "../Card/Card";
import classes from "./Modal.module.css";
import Button from "../Button/Button";

const Modal = (props) => {
    return (
        <>
            {
                ReactDOM.createPortal(<div onClick={props.onConfirm} className={classes.back}/>,document.getElementById('back-drop'))
            }

            {
                ReactDOM.createPortal(<Card className={classes.modal}>
                        <header className={classes.header}>
                            <h2>{props.title}</h2>
                        </header>
                        <div className={classes.body}>
                            {props.body}
                        </div>
                        <footer className={classes.actions}>
                            <Button onClick={props.onConfirm}>Okay</Button>
                        </footer>
                    </Card>,document.getElementById('modal'))
            }
        </>
    );
}

export default Modal;