import classes from "./Button.module.css";

const Button = ({children, onClick, type = "button", className}) => {
    return <button type={type} onClick={onClick} className={classes.btn + " " + className}>
        {children}
    </button>
}

export default Button;