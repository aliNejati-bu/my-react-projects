import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import classes from './Login.module.css';
import {useState} from "react";
import Modal from "../UI/Modal/Modal";

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

    const [error,setError] = useState(false);


    const submitHandler = (ev)=>{
        ev.preventDefault();
        if (inputEmail.trim().length === 0 || passwordInput.trim().length === 0)
            return setError({
                title:'length',
                body: 'email or password can not empty.'
            });
        if (!inputEmail.includes('@'))
            setError({
                title:'invalid Email.',
                body: `Email ${inputEmail} is Invalid.`
            });
    };

    return (
        <form onSubmit={submitHandler}>
            {error &&
                <Modal title={error.title} body={error.body} onConfirm={()=>{
                    setError(false)
                }}/>
            }
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
                <Button type='submit'>Login</Button>
                <p className={classes.register}>
                    do you haven't account? <a href="#">Register</a>
                </p>
            </Card>
        </form>
    );
}

export default Login;