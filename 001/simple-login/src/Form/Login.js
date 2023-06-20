import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import classes from './Login.module.css';

const Login = (props) => {
    return (
        <Card className={classes.login}>
            <h3 className='header'>Login</h3>
            <div className={classes['form-control']}>
                <label htmlFor="email">Email</label>
                <input type="text" id="email"/>
            </div>
            <div className={classes['form-control']}>
                <label htmlFor="password">Password</label>
                <input type="text" id="password"/>
            </div>
            <Button>Login</Button>
            <p className={classes.register}>
               do you haven't account? <a href='#'>Register</a>
            </p>
        </Card>
    );
}

export default Login;