import Card from "../Card/Card";
import classes from "./Modal.module.css";
import Button from "../Button/Button";

const Modal = (props) => {
    return (
        <>
            <div onClick={props.onConfirm} className={classes.back}/>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.body}>
                    {props.body}
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </>
    );
}

export default Modal;