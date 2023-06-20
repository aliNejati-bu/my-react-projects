import classes from "./Button.module.css";

const Button = ({children, onClick, type = "button"}) => {
    return <button type={type} onClick={onClick} className={classes.btn}>
        {children}
    </button>
}

export default Button;