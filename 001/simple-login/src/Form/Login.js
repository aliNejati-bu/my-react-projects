import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import classes from './Login.module.css';
import {useState} from "react";

const Login = () => {

    /* maneged entered email */
    const [inputEmail, setInputEmail] = useState('');
    const emailChangeHandle = (ev) => {
        setInputEmail(ev.target.value);
    }

    /* manage password */
    const [passwordInput, setPasswordInput] = useState('');
    const passwordChangeHandler = (ev) => {
        setPasswordInput(ev.target.value);
    }

    return (
        <Card className={classes.login}>
            <h3 className='header'>Login</h3>
            <div className={classes['form-control']}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" onChange={emailChangeHandle} value={inputEmail}/>
            </div>
            <div className={classes['form-control']}>
                <label htmlFor="password">Password</label>
                <input type="text" id="password" onChange={passwordChangeHandler} value={passwordInput}/>
            </div>
            <Button>Login</Button>
            <p className={classes.register}>
                do you haven't account? <a href="#">Register</a>
            </p>
        </Card>
    );
}

export default Login;