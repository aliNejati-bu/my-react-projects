import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import classes from './Login.module.css';
import {useState, useRef} from "react";
import Modal from "../UI/Modal/Modal";

const Login = () => {
    const emailInput = useRef();
    const passwordInput = useRef();

    const [error, setError] = useState(false);


    const submitHandler = (ev) => {
        ev.preventDefault();
        const inputEmail = emailInput.current.value;
        const inputPassword = passwordInput.current.value;
        if (inputEmail.trim().length === 0 || inputPassword.trim().length === 0)
            return setError({
                title: 'length',
                body: 'email or password can not empty.'
            });
        if (!inputEmail.includes('@'))
            setError({
                title: 'invalid Email.',
                body: `Email ${inputEmail} is Invalid.`
            });
    };

    return (
        <form onSubmit={submitHandler}>
            {error &&
                <Modal title={error.title} body={error.body} onConfirm={() => {
                    setError(false)
                }}/>
            }
            <Card className={classes.login}>
                <h3 className='header'>Login</h3>
                <div className={classes['form-control']}>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" ref={emailInput}/>
                </div>
                <div className={classes['form-control']}>
                    <label htmlFor="password">Password</label>
                    <input type="text" id="password" ref={passwordInput}/>
                </div>
                <Button type='submit'>Login</Button>
                <p className={classes.register}>
                    do you haven't account? <a href="#">Register</a>
                </p>
            </Card>
        </form>
    );
}

export default Login;